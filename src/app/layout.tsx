import type { Metadata } from 'next';

import '@/styles/globals.css';
import axios from 'axios';

export const metadata: Metadata = {
  title: 'Limitrova School Management System',
  description: 'Seamlessly manage your schools online',
};

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
