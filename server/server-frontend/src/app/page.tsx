'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from 'hooks/useAppSelector';

export default function HomePage() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      router.replace('/chat');
    } else {
      router.replace('/login');
    }
  }, [user]);

  return <div className="text-center mt-10 text-gray-600">Redirecting...</div>;
}
