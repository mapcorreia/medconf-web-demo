import 'styles/globals.css';

function Application({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default Application;
