// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout/Layout';
import { ModeProvider } from '@/components/ModeContext/ModeContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ModeProvider>
        <div className="appContainer">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ModeProvider>
    </SessionProvider>
  );
}
