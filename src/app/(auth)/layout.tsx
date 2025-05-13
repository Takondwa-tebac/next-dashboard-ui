import Menu from '@/components/Menu';
import Navbar from '@/components/navbar';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AppProvider } from '@/context/AppContext';

import '@/styles/globals.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <div className={'flex bg-red-300 gap-2 min-h[100vh] '}>
        <div className="w-full bg-white/30">{children}</div>
      </div>
    </AppProvider>
  );
}
