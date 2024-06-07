import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Congresso Cirurgia Vascular</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Footer />
    </div>
  );
}
