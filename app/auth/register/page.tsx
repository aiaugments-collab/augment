import { RegisterForm } from '@/components/auth/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <img src="/augment-A-blackbg.svg" alt="Augment" className="h-16 w-16 mx-auto" />
          </Link>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--oracleserif)' }}>Join Augment</h1>
          <p className="mt-2 text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Create your account to get started</p>
        </div>
      </div>
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
