import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { SupabaseProvider } from '@/components/supabase-provider';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abonelik ve Ödeme Takip Sistemi',
  description: 'Bolt tarafından oluşturuldu',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="tr">
      <body className={inter.className}>
        <SupabaseProvider session={session}>
          <div className="container">
            <SiteHeader />
            <main>{children}</main>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
