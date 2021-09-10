import '../styles/App.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clarence Adams&apos; Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta
          name='description'
          content='Clarence&apos;s portfolio created with next.js'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
