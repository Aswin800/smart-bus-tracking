import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// 👉 Import your image (place image in src/assets folder)
import campusImage from '../../assets/college_ref.jpeg';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen relative font-['Inter'] selection:bg-yellow-200 overflow-hidden">
      {/* Fixed Full Screen Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src={campusImage} 
          className="w-full h-full object-cover opacity-20 grayscale-[0.3]" 
          alt="College Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/40 to-slate-100/95 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-2xl px-6 py-5 flex items-center gap-4 text-slate-800 border-b border-white/50 sticky top-0">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center font-black text-xl mr-6 tracking-tight">PROFILE NODE</h1>
        </header>

        <div className="px-6 py-8">

          {/* User Card */}
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col items-center text-center mb-8">

            <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-lg overflow-hidden mb-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Avatar" />
            </div>

            <h2 className="text-2xl font-black text-slate-800">John Doe</h2>
            <p className="text-slate-500 font-bold text-sm">
              Register No: <span className="text-slate-700">23BME123</span>
            </p>
            <p className="text-slate-500 font-bold text-sm">
              Department: <span className="text-slate-700">Mechanical</span>
            </p>
          </div>

          {/* Menu List */}
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl overflow-hidden divide-y divide-slate-50">
            <MenuItem icon={<User className="text-blue-600" />} label="My Profile" />
            <MenuItem icon={<Lock className="text-blue-900" />} label="Change Password" />
            <MenuItem icon={<HelpCircle className="text-blue-500" />} label="Help & Support" />
            <MenuItem
              icon={<LogOut className="text-red-500" />}
              label="Logout"
              onClick={() => { logout(); navigate('/login'); }}
              noChevron
            />
          </div>

        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, onClick, noChevron }) => (
  <button
    onClick={onClick}
    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-all text-left"
  >
    <div className="flex items-center gap-4">
      <span className="p-2 bg-slate-50 rounded-xl">{icon}</span>
      <span className="font-bold text-slate-700">{label}</span>
    </div>
    {!noChevron && <ChevronRight className="w-5 h-5 text-slate-300" />}
  </button>
);

export default ProfilePage;