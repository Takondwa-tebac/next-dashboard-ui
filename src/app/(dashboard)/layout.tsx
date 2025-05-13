import Menu from '@/components/Menu';
import Navbar from '@/components/navbar';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AppProvider } from '@/context/AppContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <div className={'flex  gap-2 min-h[100vh] '}>
        <div className="w-[14%] md:w-[8%] lg:w-[16%] text-sm border-r-2 border-gray-200 px-3 xl:w-[14%] min-h-[100vh]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt=""
              className="mx-4 w-6 h-6 my-4"
            />
            <span className="hidden md:block">SMIS</span>
          </Link>
          <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white/30">
          <Navbar />
          {children}
        </div>
      </div>
    </AppProvider>
  );
}
