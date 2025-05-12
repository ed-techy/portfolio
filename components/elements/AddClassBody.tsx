'use client';
import { usePathname } from 'next/navigation'; // Corrected import path
import { useEffect } from 'react';

export default function AddClassBody() {
  const pathname = usePathname();

  useEffect(() => {
    const bodyElement = document.querySelector('body');

    if (bodyElement) {
      bodyElement.classList.add('home-page-2');
    }
  }, [pathname]);

  return null;
}
