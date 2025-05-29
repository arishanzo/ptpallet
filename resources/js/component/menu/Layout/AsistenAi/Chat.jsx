// src/ChatBox.js
import React, { useEffect, useRef, useState } from 'react';
import { IoSendSharp } from "react-icons/io5";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const now = new Date();


  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);


  const timeAgo = (timestamp) => {

        const diff = Math.floor((now - new Date(timestamp)) / 1000); // selisih detik
        if (diff < 5) return 'baru saja';
        if (diff < 60) return `${diff} detik lalu`;
        if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`;
        return `${Math.floor(diff / 86400)}`
  }

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      fromUser: true,
      waktu: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
     setInput('');
    setLoading(true);  

    try {
     const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });

    const data = await res.json();
    const botText = data.response || 'Tidak ada respons dari server.';
    let i = 0;


    const botMessage = { text: data.response, fromUser: false, waktu: new Date() };
    setMessages((prev) => [...prev, botMessage]);
   

    
    const typingInterval = setInterval(() => {
      i++;
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].text = botText.slice(0, i);
        return updatedMessages;
      });

      if (i >= botText.length) {
        clearInterval(typingInterval);
        setLoading(false);
      }
    }, 50);
      
    } catch (error) {
      const errorMessage = {
        text: 'Gagal silahkan ulangi kembali',
        fromUser: false,
        waktu: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);  // selesai loading
    }

  };


  return (
    <div className="fixed bottom-5 right-20 w-80 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className='font-bold md:text-lg dark:text-blue-500 text-blue-500 '>Asten<span className='text-purple-500 '>AI</span></h2>
        <p className="text-sm text-gray-500">Developer Kilat 2025 Team</p>
      </div>
      <div ref={containerRef} className="p-4 max-h-64 overflow-y-scroll">

   <p className="text-sm text-gray-400 mb-8">Selamat Datang, Di Asisten AI </p>
          

        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.fromUser ? 'text-right pl-12' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${msg.fromUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
               <p className="text-left">
               {msg.text}
               </p>
            </div>
            <div className="text-xs text-gray-400">{timeAgo(msg.waktu)}</div>
          </div>
        ))}

      
        {loading && (
        <div className="my-2 flex items-start justify-start">
          <div className="border-4 border-t-transparent border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
          <p  className="ml-2" >Mohon Tunggu...</p>
        </div>
      )} 

      </div>
      <div className="flex p-2 border-t">
        <input
          type="text"
          className="flex-grow border rounded-lg p-2 hover:border-purple-500 focus:outline-none"
          placeholder="Tuliskan Pesan Kamu Disni"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <button onClick={handleSend} className="ml-2 bg-purple-500 text-white rounded-lg p-4" disabled={loading}>
           <IoSendSharp />
        </button>
      </div>
    </div>
  );
};

export default Chat;
