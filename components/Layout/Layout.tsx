// components/Layout/Layout.tsx
import React, {ReactNode} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useMode } from '@/components/ModeContext/ModeContext';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useMode();

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Header />
      <main className="min-h-[550px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
