import React from 'react';
import { Bus, MapPin, Shield, Phone, History, Bell, ChevronRight, Baby, CheckCircle2 } from 'lucide-react';
import MapMockup from '../../components/Map';
import collegeImg from '../../assets/college_ref.jpeg';
import logo from '../../assets/logo.jpeg';

const ParentDashboard = () => {
  const childInfo = {
    name: "Aravind John",
    regNo: "23BME123",
    dept: "Mechanical",
    busNo: "SRM 07"
  };

  return (
    <div className="min-h-screen relative font-['Inter'] selection:bg-blue-200">
      {/* Fixed Full Screen Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src={collegeImg} 
          className="w-full h-full object-cover opacity-15 grayscale-[0.2]" 
          alt="College Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/80 to-slate-100/90 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
       {/* Top Bar */}
       <header className="bg-white/80 backdrop-blur-xl px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
             <img src={logo} className="w-8 h-8 rounded-full" alt="L" />
             <h1 className="text-lg font-bold text-slate-800">Parent Portal</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-2 bg-slate-100 rounded-full relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full" />
             </div>
             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white shadow-lg">PD</div>
          </div>
       </header>

       <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6">
          {/* Child Profile Card */}
          <div className="card flex flex-col md:flex-row items-center gap-6 group">
             <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aravind" alt="Child" />
             </div>
             <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                   <h2 className="text-2xl font-black text-slate-800">{childInfo.name}</h2>
                   <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-tighter self-center md:self-auto">Boarded Successfully</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-slate-500 font-medium text-sm">
                   <p className="flex items-center gap-1"><span className="text-slate-400">ID:</span> {childInfo.regNo}</p>
                   <p className="flex items-center gap-1"><span className="text-slate-400">Dept:</span> {childInfo.dept}</p>
                   <p className="flex items-center gap-1 text-primary"><Bus className="w-4 h-4" /> Bus: {childInfo.busNo}</p>
                </div>
             </div>
             <div className="flex gap-2">
                <button className="p-4 bg-primary/10 text-primary rounded-2xl hover:bg-primary transition-colors hover:text-white">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all">
                  Contact Driver
                </button>
             </div>
          </div>

          {/* Tracking & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Map Section */}
             <div className="lg:col-span-2 card p-0 overflow-hidden relative min-h-[400px]">
                <MapMockup />
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                   <div className="glass p-3 rounded-2xl flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-xs font-bold text-slate-700">Live GPS Active</span>
                   </div>
                   <button className="glass px-4 py-2 rounded-xl text-xs font-bold text-primary flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> View Stop Location
                   </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl flex justify-between items-center shadow-2xl border border-white/20">
                   <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Bus className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Bus SRM 07</p>
                        <p className="font-black text-slate-800 text-lg">5 mins away from Stop</p>
                      </div>
                   </div>
                   <button className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
                      <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
             </div>

             {/* Right Column - Alerts & History */}
             <div className="space-y-6">
                <div className="card !bg-danger !border-none text-white shadow-2xl shadow-danger/20">
                   <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-white/20 rounded-2xl">
                         <Shield className="w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="text-lg font-bold">Safety Center</h3>
                         <p className="text-white/70 text-sm">Emergency alerts and safety controls</p>
                      </div>
                   </div>
                   <button className="w-full py-4 bg-white text-danger font-black rounded-2xl shadow-xl hover:bg-slate-50 transition-all active:scale-95">
                      TRIGGER REMOTE SOS
                   </button>
                </div>

                <div className="card flex-1">
                   <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-slate-800 flex items-center gap-2">
                         <History className="w-4 h-4 text-primary" /> Boarding History
                      </h3>
                      <button className="text-xs font-bold text-primary">View All</button>
                   </div>
                   <div className="space-y-4">
                      <HistoryItem time="08:15 AM" date="Today" action="Boarded" bus="SRM 07" status="success" />
                      <HistoryItem time="04:45 PM" date="Yesterday" action="Dropped" bus="SRM 07" status="neutral" />
                      <HistoryItem time="08:12 AM" date="Yesterday" action="Boarded" bus="SRM 07" status="success" />
                   </div>
                </div>
             </div>
          </div>
       </main>

       {/* Bottom Mobile Tab Bar */}
       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex items-center justify-around py-3 px-6 z-20">
          <div className="flex flex-col items-center gap-1 text-primary">
             <Bus className="w-6 h-6" />
             <span className="text-[10px] font-bold uppercase">Track</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-400">
             <History className="w-6 h-6" />
             <span className="text-[10px] font-bold uppercase">History</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-400">
             <Phone className="w-6 h-6" />
             <span className="text-[10px] font-bold uppercase">Calls</span>
          </div>
       </div>
    </div>
    </div>
  );
};

const HistoryItem = ({ time, date, action, bus, status }) => (
  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status === 'success' ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-500'}`}>
        <CheckCircle2 className="w-5 h-5" />
     </div>
     <div className="flex-1">
        <p className="text-sm font-bold text-slate-800">{action} • {bus}</p>
        <p className="text-[11px] text-slate-500 font-medium">{date}, {time}</p>
     </div>
     <ChevronRight className="w-4 h-4 text-slate-300" />
  </div>
);

export default ParentDashboard;
