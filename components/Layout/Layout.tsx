// components/Layout/Layout.tsx
import React, {ReactNode} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-[550px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
