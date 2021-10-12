import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BINTANGMFHD - Web & Flutter Dev</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
