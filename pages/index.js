import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner/banner'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fakeflix</title>
        <meta name="description" content="A Netflix clone built in NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Fakeflix</h1>
{/* 
      <Navbar /> */}
      <Banner 
        title="Wednesday" 
        subtitle="Smart, sarcastic and a little dead inside Wednesday Addams investigates a murder spree while making new friends —and foes— at Nevermore Academy"
        imgUrl="/static/wednesday.jpg"
        />
{/* 
      <Card /> */}

    </div>
  )
}
