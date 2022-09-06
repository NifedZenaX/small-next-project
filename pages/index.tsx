import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.code}>
        <a href="/arknights/arknights">Arknights</a>
      </h1>
      <h1 className={styles.code}>
        <a href="">Genshin</a>
      </h1>
    </div>
  )
}

export default Home
