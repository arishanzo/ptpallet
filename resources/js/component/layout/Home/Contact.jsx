
import { useState, useEffect} from "react";
import axios from "axios";

const Contact = () => {
  
    const [form, setForm] =useState({ name: "", email: "", message: ""});
    const [status, setStatus] = useState();
    const [textbutton, setTextButton] = useState('Kirim');
    const [disabled, setDisabled] = useState(false);

    const handleChange = (e) => {
      
      setForm({ ...form, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setTextButton('Mengirim...');
        setStatus('Mengirim...');
        try {
            await axios.post('http://127.0.0.1:8000/api/contact', form);
            setStatus('Pesan berhasil dikirim!');
            setForm({ name: '', email: '', message: '' });
            setTextButton('Kirim');
             setDisabled(false);
            setTimeout(() => setStatus(''), 3000);
        } catch (err) {
            console.error(err);
            setStatus('Gagal mengirim pesan.');
            setTextButton('Kirim');
            setDisabled(false);
            setTimeout(() => setStatus(''), 3000);
        }
    };
  return (

   
    
    



<section className="text-gray-600 body-font relative md:py-32" id="contact" >
       <div className="mx-auto flex max-w-[58rem] md:py-24 py-8 flex-col items-center space-y-4 p-8 text-center" >
        <h2 className="font-heading text-4xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Contact Us</h2>
          </div>
 

    <div className="container px-5 md:mb-24  mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            className="lg:w-2/3 md:w-1/2 bg-red-50 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe 
                width="100%" 
                height="100%" 
                className="absolute inset-0" 
                title="map" 
               
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4061855196587!2d106.8951227757289!3d-6.470121346530914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1002b163415%3A0x29892265542320c1!2sPT%20INDONESIA%20PALLET%20LOGISTIK!5e0!3m2!1sid!2sid!4v1753509319270!5m2!1sid!2sid"
               >
            </iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Jl. Bantar Jati, Bantar Jati, Kec. Klapanunggal, Kabupaten Bogor, Jawa Barat 16710</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-red-500 leading-relaxed">company@indonesiapallet.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">081324221338</p>
                </div>
            </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col shadow-xl p-8 md:ml-auto w-full md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium md:text-2xl font-inter font-bold">Form Contact</h2>
            <p className="leading-relaxed py-4 text-gray-600">Isi Form Contact untuk Feedback atau bertanya lebih detail tentang kami
            </p>

        {status && 
        <div 
        class={`${
                status === 'Pesan berhasil dikirim!' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'
                }text-red-700 px-4 py-3 rounded relative`} 
                role="alert">
    <strong class="font-bold">Pesan {`\n`}</strong>
    <span class="block sm:inline text-semibold">{status}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
    </span>
</div>
 
}
           
         <form onSubmit={handleSubmit}>

            <div className="relative mb-4">

                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Subjek</label>

                <input type="text" 
                required
                id="name" 
                name="name" 
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                
                />
            
            </div>
            <div className="relative mb-4">

                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
               
                <input type="email"
                required 
                id="email" 
                name="email" 
                 value={form.email}
        onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                />
              
            </div>
            <div className="relative mb-4">

                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>

                <textarea 
                id="message" 
                name="message" 
                 value={form.message}
                  onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
                ></textarea>

            </div>
            <button 
            type="submit"
            disabled={disabled}
            className={`text-white bg-red-400 border-0 py-2 px-6 focus:outline-none rounded-full w-[150px] text-lg transition ${
                disabled
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:bg-red-600'
                }`} 
            >
                {textbutton}
            </button>
           
           </form>


        </div>
    </div>
</section>


   
    
  );
};



export default Contact;
