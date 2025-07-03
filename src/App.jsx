import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Level1 from './pages/Level1'

export default function App() {
  return (
    <BrowserRouter basename="/gamification">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/level/1" element={<Level1 />} />
      </Routes>
    </BrowserRouter>
  )
}
