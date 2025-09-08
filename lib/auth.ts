import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

// Auth functions
export const signUp = async (email: string, password: string, displayName?: string): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // Update profile with display name if provided
  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }
  
  // Create user document in Firestore
  if (userCredential.user) {
    await createUserDocument(userCredential.user, { displayName });
  }
  
  return userCredential;
};

export const signIn = async (email: string, password: string): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  
  // Create user document in Firestore if it doesn't exist
  if (userCredential.user) {
    await createUserDocument(userCredential.user);
  }
  
  return userCredential;
};

export const logOut = async (): Promise<void> => {
  return await signOut(auth);
};

export const resetPassword = async (email: string): Promise<void> => {
  return await sendPasswordResetEmail(auth, email);
};

// User document management
export const createUserDocument = async (user: User, additionalData?: any) => {
  if (!user) return;
  
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    
    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }
  
  return userRef;
};

export const getUserDocument = async (uid: string) => {
  if (!uid) return null;
  
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { uid, ...userSnap.data() };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching user document:', error);
    return null;
  }
};

// Auth state observer
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
