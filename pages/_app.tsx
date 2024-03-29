import TopBar from '@/components/molecules/TopBar';
import Header from '@/components/organisms/Header';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <TopBar />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
