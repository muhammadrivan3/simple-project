import { Routes, Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import ImagePage from './pages/ImagePage'
import DecisionPage from './pages/DecisionPage'
import Home from './pages/Home'

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/image" element={<ImagePage />} />
      <Route path="/decision" element={<DecisionPage />} />
    </Routes>
  )
}

export default RoutesIndex
