// src/ChatBox.js
import { useEffect, useRef, useState } from 'react';
import { getDataLayanan } from '../../../../data/dataLayanan';
import { getDataPaketHarga } from '../../../../data/dataPaketHarga';


const ChatAi = () => {

  const text = 'Apa Yang Bisa Kami Bantu..';
  const typingSpeed = 150; 
  const deletingSpeed = 100;
  const pauseDelay = 1500 ;
  
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);



  // 
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const containerRef = useRef(null);
  const now = new Date();

  const textareaRef = useRef(null);

 useEffect(() => {

    let timeoutId;
    if (!isDeleting && index < text.length) {
      // Typing mode, add next character
      timeoutId = setTimeout(() => {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Deleting mode, remove last character
      timeoutId = setTimeout(() => {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
      // Pause before deleting
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && index === 0) {
      // Pause before typing again
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
      }, pauseDelay);

      return () => clearTimeout(timeoutId);
    };

     
  // 
  if (containerRef.current) {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }
}, [messages, loading, index, isDeleting, text, typingSpeed, deletingSpeed, pauseDelay]);



  const timeAgo = (timestamp) => {

        const diff = Math.floor((now - new Date(timestamp)) / 1000); 
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
    <section class="bg-center dark:bg-gray-900"  ref={containerRef}>
  
  <div className="mx-auto md:max-w-screen-xl md:pt-20 md:pb-8 p-8">
  

       
   <div class="flex items-center justify-center p-3 ">
        
           <h2 className='font-bold md:text-5xl text-4xl text-center dark:text-blue-500 text-blue-500 md:mb-4'>Asten<span className='text-purple-500 '>AI</span>✨</h2>
      
                
          

        </div>



        

   </div>

 
 
<div class=" bg-gradient-to-tr from-eee to-neutral-200 flex flex-col justify-center">

  <div class="w-[80%] md:max-w-screen-xl mx-auto overflow-hidden">


            {showTitle && (
            <h2 className="font-bold md:text-2xl text-center dark:text-gray-200 text-gray-300 p-8">
             {displayText}
            </h2>
            )}


      <div ref={containerRef} className="w-full p-4">

          

        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.fromUser ? 'text-right pl-12' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${msg.fromUser ? 'bg-blue-500 text-white' : ' md:text-black text-gray-400 '}`}>
            <pre className="whitespace-pre-wrap break-words text-left">
    {msg.text}
  </pre>
            </div>
            <div className="text-xs text-gray-400">{timeAgo(msg.waktu)}</div>
          </div>
        ))}
           
      
        {loading && (
        <div className="my-2 flex items-start justify-start">
          <div className="border-4 border-t-transparent border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
          <p  className="ml-2 dark:text-white" >Mohon Tunggu...</p>
        </div>
      )} 

      </div>




   
    <div class="flex w-full mb-6 gap-3 text-sm text-neutral-800 overflow-x-auto gap-4 p-4">
      
    <button
  type='button'
  class="min-w-[250px] group shadow-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white relative grow border border-ccc hover:shadow-md hover:-translate-y-[1px] hover:bg-purple-500 hover:text-white rounded-xl p-4 transition-all duration-300"
  onClick={() => handleSendMessage('Apa Saja Layanan Yang Di Miliki Oleh DevKlit Saat Ini?')}
>
  Apa Saja Layanan Devklit?

  <svg class="absolute right-2 bottom-2 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g fill="none">
      <path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z" fill="currentColor"></path>
    </g>
  </svg>
</button>

       <button type="button"
    class="min-w-[250px] group bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white shadow-xl relative border border-ccc shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:bg-purple-500 hover:text-white rounded-xl p-4 transition-all duration-300"
    onClick={() => handleSendMessage("Paket Harga Yang Di Miliki Devklit Apa Saja ?")}>
    Paket Harga Yang Di Miliki Devklit Apa Saja ?
    <svg class="absolute right-2 bottom-2 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g fill="none">
        <path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z"
          fill="currentColor"></path>
      </g>
    </svg>
  </button>

  <button type="button"
    class="min-w-[250px] group bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white shadow-xl relative border border-ccc shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:bg-purple-500 hover:text-white rounded-xl p-4 transition-all duration-300"
    onClick={() => handleSendMessage("Kantor Devklit Dimana ? Apa Anda Bisa Beritahu")}>
    Kantor Devklit Dimana ? Apa Anda Bisa Beritahu
    <svg class="absolute right-2 bottom-2 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g fill="none">
        <path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z"
          fill="currentColor"></path>
      </g>
    </svg>
  </button>

    </div>

    <div class="bg-white  dark:bg-gray-800 dark:border-gray-700 dark:text-white h-28 rounded-3xl shadow-md border border-neutral-200 relative">
      
      <div class="flex ">
      <textarea
  ref={textareaRef}
  className="grow  m-4 dark:bg-gray-800 outline outline-0 focus:outline-0 active:border-transparent min-h-16"
  placeholder="Type your question here ..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  disabled={loading}
  onFocus={() => {
    // Scroll ke textarea agar muncul di atas keyboard
    setTimeout(() => {
      textareaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 300); // Delay untuk tunggu keyboard muncul
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }}
></textarea>
      </div>
      
      <div class="flex gap-2 items-center absolute right-2 bottom-2 ">
        <div class="text-xs">{input.length}/4000</div>
        <div class="bg-neutral-700 rounded-full text-white w-8 h-8 p-2 "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 244l144-144l144 144"></path>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 120v292"></path>
          </svg>

        </div>
      </div>

    </div>
  </div>
  
  <div class="w-[80%] md:max-w-screen-xl mx-auto pt-8 mb-8 overflow-hidden">
      
      <div 
      class="group text-center shadow-xl dark:bg-gray-800 dark:border-gray-700 text-sm dark:text-white bg-white relative grow border border-ccc hover:shadow-md rounded-xl p-4"
      >
      ✨ Perkenalkan Asisten AI (AstenAI) Membantu Anda Untuk Kebutuhan Anda Saat ini... Sudah Saatnya Anda Berkembang Untuk Masa Depan Anda..
        
      </div>
      </div>
</div>


</section>
  );
};

export default ChatAi;
