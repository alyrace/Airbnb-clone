import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/*Naviagtion */}
        <Header />
        {/*BANNER */}
        <Banner />
        {/*Main */}
        <Main exploreData={exploreData} cardData={cardData} />
        {/*Footer*/}
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
  const cardData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());
  return {
    props: {
      exploreData,
      cardData,
    }
  }
}
