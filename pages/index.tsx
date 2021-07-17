import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../Components/Hero/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
     <title>instant chat</title>
      </Head>
<Hero/>
    </div>
  )
}
