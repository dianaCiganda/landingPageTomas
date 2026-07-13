import React from 'react'
import Layout from './components/layout/Layout'
import Banner from './components/sections/Banner'
import About from './components/sections/About'
import './styles/App.css'

function App() {
  return (
    <Layout>
      <Banner />
      <About />
    </Layout>
  )
}

export default App
