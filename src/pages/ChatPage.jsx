import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Loader2, Bot, SendHorizonal, AlertTriangle } from 'lucide-react'

function ChatPage() {
  const [messages, setMessages] = useState([])
  const [userInput, setUserInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const sendMessage = async (e) => {
    e.preventDefault()
    setError("")
    if (!userInput.trim()) return

    const newMessage = { text: userInput, sender: "user" }
    setMessages(prev => [...prev, newMessage])
    setUserInput("")
    setLoading(true)

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chat/', {
        message: userInput
      })

      const botReply = { text: response.data.reply, sender: "bot" }
      setMessages(prev => [...prev, botReply])
    } catch (err) {
      setError("Gagal terhubung ke server. Coba cek koneksi backend.")
      const botError = { text: "⚠️ Bot tidak merespon saat ini.", sender: "bot" }
      setMessages(prev => [...prev, botError])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md h-[600px] rounded-xl shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="bg-gray-900 text-white text-sm font-mono px-4 py-2 flex items-center gap-2">
          <Bot size={18} /> Chatbot Self Learning
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`px-4 py-2 rounded-lg max-w-[75%] text-sm ${
                msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 text-sm flex items-center gap-2">
                <Loader2 className="animate-spin" size={16} />
                Bot sedang mengetik...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={sendMessage} className="border-t p-3 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Ketik pesan..."
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded-lg text-white flex items-center gap-1 text-sm ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <SendHorizonal size={16} />
          </button>
        </form>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 text-xs border-t border-red-300 flex items-center gap-2 justify-center">
            <AlertTriangle size={14} /> {error}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default ChatPage
