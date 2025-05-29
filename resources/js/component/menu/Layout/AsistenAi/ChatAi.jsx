// src/ChatBox.js
import React, { useEffect, useRef, useState } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { RiChatAiFill } from "react-icons/ri";
import { getDataLayanan } from '../../../../data/dataLayanan';
import { getDataPaketHarga } from '../../../../data/dataPaketHarga';
import Markdown from 'react-markdown';


const ChatAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

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


const handleSendMessage = async (pesan) => {
  const userMessage = {
    text: pesan,
    fromUser: true,
    waktu: new Date(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setLoading(true);
  setShowTitle(false);

  let data = '';

  if (pesan === 'Apa Saja Layanan Yang Di Miliki Oleh DevKlit Saat Ini?') {
    const layanan = getDataLayanan(); // array
     data = layanan
    .map((item, index) => `${index + 1}. ${item.judul}\n${item.text}`)
    .join('\n\n');

  } else if (pesan === 'Paket Harga Yang Di Miliki Devklit Apa Saja ?') {
    const harga = getDataPaketHarga(); // array
    data = harga.
    map((item, index) => `${index + 1}. ${item.Paket}\n${item.Harga}\n${item.Deskripsi}`)
    .join('\n\n');
  } else {
    data =
      'Kantor Devklit Berada Di Jalan Basuki Rahmad Rangge RT.06 RW.01 Kel.Sukomulyo Kec.Lamongan Jawa Timur';
  }

  const botMessage = {
    text: data,
    fromUser: false,
    waktu: new Date(),
  };

  setMessages((prev) => [...prev, botMessage]);
  setLoading(false);
     const botText = data || 'Tidak ada respons dari server.';
    let i = 0;

    
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
    }, 1);

};



  // const handleSend = async () => {
  //   if (!input.trim()) return;

  //   const userMessage = {
  //     text: input,
  //     fromUser: true,
  //     waktu: new Date(),
  //   };

  //   setMessages((prev) => [...prev, userMessage]);
  //    setInput('');
  //   setLoading(true);  
  //   setShowTitle(false);

  //   try {
  //    const res = await fetch('/api/chat', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ prompt: input })
  //   });

  //   const data = await res.json();
  //   const botText = data.response || 'Tidak ada respons dari server.';
  //   let i = 0;


  //   const botMessage = { text: data.response, fromUser: false, waktu: new Date() };
  //   setMessages((prev) => [...prev, botMessage]);
   

    
  //   const typingInterval = setInterval(() => {
  //     i++;
  //     setMessages((prev) => {
  //       const updatedMessages = [...prev];
  //       updatedMessages[updatedMessages.length - 1].text = botText.slice(0, i);
  //       return updatedMessages;
  //     });

  //     if (i >= botText.length) {
  //       clearInterval(typingInterval);
  //       setLoading(false);
  //     }
  //   }, 50);
      
  //   } catch (error) {
  //     const errorMessage = {
  //       text: 'Gagal silahkan ulangi kembali',
  //       fromUser: false,
  //       waktu: new Date(),
  //     };

  //     setMessages((prev) => [...prev, errorMessage]);
  //   } finally {
  //     setLoading(false);  // selesai loading
  //   }

  // };


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
  setShowTitle(false);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');

    let fullText = '';
    const botMessage = { text: '', fromUser: false, waktu: new Date() };
    setMessages((prev) => [...prev, botMessage]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
 setLoading(false);
      const chunk = decoder.decode(value, { stream: true });

      // Potong jika JSONL
      const lines = chunk.split('\n').filter(Boolean);
      for (let line of lines) {
        try {
          const json = JSON.parse(line);
          const content = json.response || '';
          fullText += content;

          // Update isi pesan bot
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1].text = fullText;
            return updated;
          });

        } catch (err) {
          // jika chunk bukan JSON, langsung gabung
          fullText += line;

          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1].text = fullText;
            return updated;
          });
        }
      }
    }

  } catch (error) {
    console.error(error);
    setMessages((prev) => [...prev, {
      text: 'Gagal mengambil respons. Coba lagi.',
      fromUser: false,
      waktu: new Date()
    }]);
  } finally {
    setLoading(false);
  }
};


 

  return (
    <section class="bg-center dark:bg-gray-900 bg-cover"  ref={containerRef}>
  
  <div className="mx-auto md:max-w-screen-xl pt-20 pb-8">
  

       <h2 className='font-bold md:text-5xl text-center dark:text-blue-500 text-blue-500 mb-4'>Asten<span className='text-purple-500 '>AI</span>✨</h2>
        <h1
            class="max-w-2xl mx-auto text-center font-manrope font-bold text-xl text-gray-500 mb-5 md:text-xl">
           Percaya, Tidak Ada Orang Yang Lahir Untuk Gagal <br></br>
        </h1>

   <div class="flex items-center justify-between p-3 border-b border-gray-100 insta-border">
            <div class="flex items-center space-x-3">
            
              <a href="/asistenai">
              <IoArrowBack size={24}/>
               </a>
                
            </div>
           
            <a href="/asistenai/chatai">
            <RiChatAiFill size={24} />
            </a>

        </div>



        

   </div>

 
 
<div class=" h-9/10 mb-32 bg-gradient-to-tr from-eee to-neutral-200 flex flex-col justify-center">

  <div class="w-[80%] md:max-w-screen-xl mx-auto  overflow-hidden">


            {showTitle && (
            <h2 className="font-bold md:text-2xl text-center dark:text-gray-200 text-gray-300 p-8">
                Apa Yang Bisa Kami Bantu 
            </h2>
            )}


      <div ref={containerRef} className="">

          

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




   
    <div class="flex w-full mb-6 gap-3 text-sm text-neutral-800">
      
       <button type='button'
      class="group shadow-xl bg-white relative grow border border-ccc  hover:shadow-md hover:-translate-y-[1px] hover:bg-purple-500 hover:text-white  rounded-xl p-4 transition-all duration-300 "
       onClick={() => handleSendMessage("Apa Saja Layanan Yang Di Miliki Oleh DevKlit Saat Ini?")}
      >
      
        Apa Saja Layanan Yang Di Miliki Oleh DevKlit Saat Ini?
        
        <svg class="absolute right-2 bottom-2 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z" fill="currentColor"></path></g></svg>
      </button>
      
      <button type='button'
      class="group bg-white shadow-xl relative grow border border-ccc shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:bg-purple-500 hover:text-white  rounded-xl p-4 transition-all duration-300"
      onClick={() => handleSendMessage("Paket Harga Yang Di Miliki Devklit Apa Saja ?")}
      >
        Paket Harga Yang Di Miliki Devklit Apa Saja ?
      <svg class="absolute right-2 bottom-2 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z" fill="currentColor"></path></g></svg>
      </button>

      <button type='button'
      class="group bg-white shadow-xl relative grow border border-ccc shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:bg-purple-500 hover:text-white rounded-xl p-4 transition-all duration-300"
      onClick={() => handleSendMessage("Kantor Devklit Dimana ? Apa Anda Bisa Beritahu")}
       >
       Kantor Devklit Dimana ? Apa Anda Bisa Beritahu
      <svg class="absolute right-2 bottom-2 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z" fill="currentColor"></path></g></svg>
      </button>

    </div>

    <div class="bg-white h-28 rounded-2xl shadow-md border border-neutral-200 relative">
      
      <div class="flex">
        <textarea 
        class="grow m-4 outline outline-0 focus:outline-0 active:border-transparent min-h-16"
        placeholder="Type your question here ..."
        value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSend();
            }
          }}
        >
        </textarea>
      </div>
      
      <div class="flex gap-2 items-center absolute right-2 bottom-2">
        <div class="text-xs">{input.length}/4000</div>
        <div class="bg-neutral-700 rounded-full text-white w-8 h-8 p-2 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 244l144-144l144 144"></path>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 120v292"></path>
          </svg>

        </div>
      </div>

    </div>
  </div>
  
  <div class="w-[80%] md:max-w-screen-xl mx-auto pt-8 overflow-hidden">
      
      <div 
      class="group text-center shadow-xl bg-white relative grow border border-ccc hover:shadow-md rounded-xl p-4"
      >
      ✨ Perkenalkan Asisten AI (AstenAI) Membantu Anda Untuk Kebutuhan Anda Saat ini... Sudah Saatnya Anda Berkembang Untuk Masa Depan Anda..
        
      </div>
      </div>
</div>


</section>
  );
};

export default ChatAi;
