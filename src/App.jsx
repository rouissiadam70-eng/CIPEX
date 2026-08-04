import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NewsArticle from './pages/NewsArticle'
import Governance from './pages/Governance'
import DiscoverTunisia from './pages/DiscoverTunisia'
import SuccessStories from './pages/SuccessStories'
import Marketplace from './pages/Marketplace'
import './App.css'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick so the target section exists in the DOM after navigation
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualites/:slug" element={<NewsArticle />} />
        <Route path="/gouvernance" element={<Governance />} />
        <Route path="/decouvrir-la-tunisie" element={<DiscoverTunisia />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
      <Footer />
    </>
  )
}
