import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="BINTANGMFHD - Web & Flutter Dev" />
          <meta name="description" content="Hey there, This is Bintang Miftaqul Huda. I am an Web & Flutter developer who also works on Kernels & Scripts." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BINTANGMFHD - Web & Flutter Dev" />
          <meta property="og:description" content="Hey there, This is Bintang Miftaqul Huda. I am an Web & Flutter developer who also works on Kernels & Scripts." />
          <meta property="og:image" content="https://drive.google.com/file/d/1p9E8DvFv99ufEogUv8d8wyMIXu3ACfe_/view?usp=sharing" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="BINTANGMFHD - Web & Flutter Dev" />
          <meta property="twitter:description" content="Hey there, This is Bintang Miftaqul Huda. I am an Web & Flutter developer who also works on Kernels & Scripts." />
          <meta property="twitter:image" content="https://drive.google.com/file/d/1p9E8DvFv99ufEogUv8d8wyMIXu3ACfe_/view?usp=sharing" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
