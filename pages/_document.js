import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>Clarence Adams&apos; Portfolio</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta
            name='description'
            content='Clarence&apos;s portfolio created with next.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
