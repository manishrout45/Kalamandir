import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import { AppProviders } from '@/context';

export const metadata = {
  title: 'Kalamandir',
  description: 'Traditional fashion ecommerce storefront',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          
          <Navbar />
          <AnnouncementBar />
          <main className="min-h-[70vh] pt-8">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
