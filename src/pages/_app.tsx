import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from './components/layouts/MainLayout'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
