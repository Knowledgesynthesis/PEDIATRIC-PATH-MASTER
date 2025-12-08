import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useThemeStore } from './store/themeStore'
import Layout from './components/Layout'
import Home from './pages/Home'
import Development from './pages/Development'
import Perinatal from './pages/Perinatal'
import Neonatal from './pages/Neonatal'
import SRBCT from './pages/SRBCT'
import PedTumors from './pages/PedTumors'
import PedsGiGu from './pages/PedsGiGu'
import SoftTissue from './pages/SoftTissue'
import LiverTumors from './pages/LiverTumors'
import Autopsy from './pages/Autopsy'
import IhcMolecular from './pages/IhcMolecular'
import Pitfalls from './pages/Pitfalls'
import Cases from './pages/Cases'
import Assessment from './pages/Assessment'
import Settings from './pages/Settings'

function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Development />} />
        <Route path="/perinatal" element={<Perinatal />} />
        <Route path="/neonatal" element={<Neonatal />} />
        <Route path="/srbct" element={<SRBCT />} />
        <Route path="/ped-tumors" element={<PedTumors />} />
        <Route path="/peds-gi-gu" element={<PedsGiGu />} />
        <Route path="/soft-tissue" element={<SoftTissue />} />
        <Route path="/liver-tumors" element={<LiverTumors />} />
        <Route path="/autopsy" element={<Autopsy />} />
        <Route path="/ihc-molecular" element={<IhcMolecular />} />
        <Route path="/pitfalls" element={<Pitfalls />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
