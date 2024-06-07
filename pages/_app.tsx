import 'styles/globals.css';
import { Lato } from '@next/font/google';

const primaryFont = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function Application({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <main className={primaryFont.className}>
      <Component {...pageProps} />;
    </main>
  );
}

export default Application;
