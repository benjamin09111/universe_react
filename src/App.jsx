import { useState } from 'react'
import Searcher from "./components/Searcher"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <Searcher />
      <About />
    </div>
  )
}

export default App
