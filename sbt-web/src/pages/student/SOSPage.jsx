import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SOSPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] flex flex-col">
       {/* Red Header */}
       <header className="bg-[#DC2626] px-6 py-4 flex items-center gap-4 text-white">
          <button onClick={() => navigate(-1)}><ArrowLeft className="w-6 h-6" /></button>
          <h1 className="flex-1 text-center font-black text-xl mr-6">Emergency SOS</h1>
       </header>

       <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="relative mb-12 flex items-center justify-center">
             {/* Radiating Rings */}
             <motion.div 
               animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute w-48 h-48 bg-red-100 rounded-full"
             />
             <motion.div 
               animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
               className="absolute w-48 h-48 bg-red-50 rounded-full"
             />
             
             <button 
               onClick={() => setActive(true)}
               className={`relative z-10 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${active ? 'bg-red-800' : 'bg-[#DC2626]'}`}
             >
                <span className="text-white text-4xl font-black tracking-tighter">SOS</span>
             </button>
          </div>

          <div className="space-y-2 mb-16">
             <h2 className="text-xl font-black text-slate-800 leading-tight">Tap the button to send <br /> emergency alert</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex items-start gap-4 max-w-sm w-full">
             <div className="p-3 bg-slate-50 rounded-2xl">
                <MapPin className="text-slate-800 w-6 h-6" />
             </div>
             <div className="text-left">
                <p className="font-bold text-slate-800 leading-tight">Your location will be shared with parents & authorities</p>
             </div>
          </div>
       </main>
    </div>
  );
};

export default SOSPage;
