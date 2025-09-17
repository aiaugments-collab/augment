import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase';

// Auth functions
export const signUp = async (email: string, password: string, displayName?: string): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // Update profile with display name if provided
  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }
  
  return userCredential;
};

export const signIn = async (email: string, password: string): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  
  // Configure the provider for better popup handling
  provider.addScope('email');
  provider.addScope('profile');
  
  // Set custom parameters to ensure consistent behavior
  provider.setCustomParameters({
    prompt: 'select_account' // Always show account selection
  });
  
  try {
    return await signInWithPopup(auth, provider);
  } catch (error: unknown) {
    console.error('Google Sign-In Error:', error);
    
    if (error && typeof error === 'object' && 'code' in error) {
      const errorCode = (error as { code: string }).code;
      const errorMessage = (error as { message?: string }).message;
      
      switch (errorCode) {
        case 'auth/unauthorized-domain':
          throw new Error('This domain is not authorized for Google Sign-In. Please add your domain to Firebase Console > Authentication > Settings > Authorized domains.');
        case 'auth/popup-closed-by-user':
          throw new Error('Sign-in was cancelled. Please try again.');
        case 'auth/popup-blocked':
          throw new Error('Pop-up was blocked by your browser. Please allow pop-ups and try again.');
        case 'auth/operation-not-allowed':
          throw new Error('Google Sign-In is not enabled. Please contact support.');
        case 'auth/network-request-failed':
          throw new Error('Network error. Please check your connection and try again.');
        default:
          throw new Error(`Sign-in failed: ${errorMessage || 'Unknown error'}`);
      }
    }
    
    throw error;
  }
};

// Alternative Google Sign-in using redirect (better for mobile/popup issues)
export const signInWithGoogleRedirect = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  
  provider.addScope('email');
  provider.addScope('profile');
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  try {
    await signInWithRedirect(auth, provider);
    // Note: This will redirect the page, so execution stops here
  } catch (error: unknown) {
    console.error('Google Sign-In Redirect Error:', error);
    throw error;
  }
};

// Handle redirect result (call this on page load)
export const handleGoogleRedirectResult = async (): Promise<UserCredential | null> => {
  try {
    const result = await getRedirectResult(auth);
    return result;
  } catch (error: unknown) {
    console.error('Google Redirect Result Error:', error);
    throw error;
  }
};

export const logOut = async (): Promise<void> => {
  return await signOut(auth);
};

export const resetPassword = async (email: string): Promise<void> => {
  return await sendPasswordResetEmail(auth, email);
};

// Auth state observer
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
