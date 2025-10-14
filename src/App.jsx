import React from 'react'
import { Navigation } from './assets/Components/Navigation'
import { PortfolioHero } from './assets/Components/PortfolioHero'
import { Portfolio } from './assets/Components/Portfolio'
import { Projects } from './assets/Components/Projects'
import { Contact } from './assets/Components/Contact'

const App = () => {
  return (
    <div className="scroll-smooth">
        <Navigation />
        <PortfolioHero />
        <Portfolio />
        <Projects />
        <Contact />
    </div>
  )
}

export default App