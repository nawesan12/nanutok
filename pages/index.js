import Head from 'next/head'
import Reproductor from '../components/Reproductor'

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>NanuTok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reproductor />
    </div>
  )
}
