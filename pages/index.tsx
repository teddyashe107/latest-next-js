import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/atoms/Button'
import dynamic from 'next/dynamic'

const ThemeSwitch = dynamic(() => import('@/components/atoms/ThemeSwitch'), { ssr: false})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // variadic function in typescript 

    function sumVariadicSafe(...numbers: number[]) {
      return numbers.reduce((total, n) => total + n, 0)
    }

    const sum = sumVariadicSafe()

  return (
    <>
      <Head>
        <title>my new portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
         <p className='dark:text-white text-red-900 text-3xl font-bold'>done with starter</p>
         <ThemeSwitch />
         <Button>
          contact me
         </Button>
      </main>
    </>
  )
}
