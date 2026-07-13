import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../sections/Banner'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Publications from '../sections/Publications'
import Supervision from '../sections/Supervision'
import Teaching from '../sections/Teaching'
import News from '../sections/News'
import Contact from '../sections/Contact'
import Overview from '../sections/Overview'

const Home = () => {
  return (
    <Layout>
      <Banner />
      <About />
    </Layout>
  )
}

export default Home