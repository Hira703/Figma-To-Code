import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Collection from './components/Collection'
import LearnMore from './components/LearnMore'
import Browse from './components/Browse'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div >
<Navbar></Navbar>
<Hero></Hero>
<Services></Services>
<Collection></Collection>
<LearnMore></LearnMore>
<Browse></Browse>
<HowItWorks></HowItWorks>
<Contact></Contact>
<Footer></Footer>
    </div>
  )
}

export default App
