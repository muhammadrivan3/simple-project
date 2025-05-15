import React, { useState } from 'react';
import axios from 'axios';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // Menyimpan pesan pengguna ke dalam state messages
    const newMessage = { text: userInput, sender: "user" };
    setMessages([...messages, newMessage]);

    try {
      // Mengirim pesan ke backend Django untuk diproses
      // LOCAL
      // const response = await axios.post('http://127.0.0.1:8000/api/chat/', {
      //   message: userInput
      // });
      // PUBLIC
      const response = await axios.post('https://chatbotapi-production-bef4.up.railway.app/api/chat/', {
        message: userInput
      });
      // Menambahkan respons dari bot ke dalam messages state
      const botReply = { text: response.data.reply, sender: "bot" };
      setMessages([...messages, newMessage, botReply]);

      // Reset input setelah mengirim pesan
      setUserInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-[500px] flex flex-col">
        <div className="overflow-auto mb-4 flex-1">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`bg-${message.sender === "user" ? "blue" : "green"}-500 text-white p-2 rounded-lg max-w-xs`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border p-2 rounded-l-md w-full"
            placeholder="Ketik pesan..."
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
