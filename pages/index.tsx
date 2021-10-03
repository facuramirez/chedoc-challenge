import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import HomePage from '../components/Home/Home';


const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}


export default Home
