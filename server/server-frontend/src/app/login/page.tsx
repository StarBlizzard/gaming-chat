'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { login } from 'features/auth/thunks';

export default function Home() {
  const dispatch = useDispatch<userAppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-black">
          <div className="flex flex-col m-4">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col m-4">
            <label htmlFor="password" className="mb-1 text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="flex flex-col m-4 bg-blue-300 rounded-md p-2 mt-10">
            <button className="cursor-pointer text-white " onClick={(e) => handleSubmit(e)}>
              Login
            </button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        FOOTER
      </footer>
    </div>
  );
}
