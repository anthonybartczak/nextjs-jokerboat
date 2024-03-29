import { Navbar } from '../components/Navbar';
import Head from "next/head";
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Navigation using nextjs and tailwindcss</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
        </Head>
        <Navbar/>
        <main className="center px-20 mt-12">
          <Hero/>
        </main>
      </div>
    </>
  )
}