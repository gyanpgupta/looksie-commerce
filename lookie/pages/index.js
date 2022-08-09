import Head from 'next/head'
import Header from '../src/component/Header'
import styles from '../styles/Home.module.css'
import Modal from '../src/component/Modal'
import Footer from '../src/component/Footer'

import Landing from '../src/component/Landing'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if(!localStorage.getItem('token')) {
      router.push('/user/login')
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Modal/>
      <Landing/>
      <Footer />
      
    </div>
  )
}