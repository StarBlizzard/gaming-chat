'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { logout } from 'features/auth/thunks';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch<userAppDispatch>();
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(logout());
  };

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-black">
          CHAT PAGE
          <div className="flex flex-col m-4 bg-red-300 rounded-md p-2 mt-10">
            <button className="cursor-pointer text-white " onClick={(e) => handleLogout(e)}>
              Logout
            </button>
          </div>
       </div>
      </main>
    </div>
  );
}
