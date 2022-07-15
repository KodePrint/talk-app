import Head from 'next/head'
import Image from 'next/image'

import Wrapper from 'containers/Wrapper'
import HelloContainer from 'containers/HelloContainer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <HelloContainer />
      </Wrapper>

    </div>
  )
}
