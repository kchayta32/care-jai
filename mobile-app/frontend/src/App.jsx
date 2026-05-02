import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Heart, 
  Calendar, 
  Settings, 
  Mic, 
  Phone, 
  Bell, 
  Activity, 
  User, 
  AlertCircle,
  Smile,
  Moon,
  Users
} from 'lucide-react';

const API_BASE = 'http://localhost:8000';

export default function App() {
  const [view, setView] = useState('caregiver'); // 'caregiver' or 'senior'
  const [userRole, setUserRole] = useState('caregiver');

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans">
      {/* Role Switcher for Demo Purposes */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white p-1 rounded-full shadow-lg border border-gray-200">
        <button 
          onClick={() => setView('caregiver')} 
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${view === 'caregiver' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          Caregiver
        </button>
        <button 
          onClick={() => setView('senior')} 
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${view === 'senior' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          Senior
        </button>
      </div>

      <AnimatePresence mode="wait">
        {view === 'caregiver' ? (
          <motion.div 
            key="caregiver" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 20 }} 
            transition={{ duration: 0.2 }}
          >
            <CaregiverDashboard />
          </motion.div>
        ) : (
          <motion.div 
            key="senior" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            transition={{ duration: 0.2 }}
          >
            <SeniorCompanion />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaregiverDashboard() {
  const [anomaly, setAnomaly] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAnomalies();
  }, []);

  const checkAnomalies = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/analyze-health`, {
        data: {
          pill_box_opened: false,
          last_opened: "2026-05-02T07:00:00",
          current_time: new Date().toISOString(),
          heart_rate: 72,
          mood: "stable"
        }
      });
      if (res.data.anomaly) setAnomaly(res.data);
    } catch (e) {
      console.error("Failed to fetch anomalies", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-5 pt-16 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center">
            <Heart className="text-on-primary-container w-5 h-5" fill="currentColor" />
          </div>
          <span className="text-xl font-bold text-primary">Care-Jai</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
          <img src="https://i.pravatar.cc/100?img=1" alt="Caregiver" />
        </div>
      </header>

      <section className="mb-8">
        <h1 className="text-3xl font-bold text-on-surface">Good Morning,</h1>
        <p className="text-on-surface-variant">Here is the latest update on Grandpa's care.</p>
      </section>

      {anomaly && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="bg-primary-fixed rounded-2xl p-5 shadow-lg border border-primary-fixed-dim mb-8 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 blur-3xl rounded-full" />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-primary w-4 h-4" fill="currentColor" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">AI Anomaly Detected</span>
            </div>
            <h2 className="text-xl font-bold text-on-primary-fixed">{anomaly.title}</h2>
            <p className="text-on-primary-fixed-variant text-sm">{anomaly.message}</p>
            <div className="flex gap-3 mt-2">
              <button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </button>
              <button className="flex-1 bg-white/50 text-on-primary-fixed-variant py-3 rounded-xl font-semibold border border-primary/20 hover:bg-white/80 transition-colors">
                Remind Later
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <section className="bg-white rounded-2xl p-5 shadow-sm border border-surface-variant flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-on-surface">Health & Mood Trend</h3>
            <p className="text-xs text-on-surface-variant">Last 7 Days (Stable)</p>
          </div>
          <div className="bg-secondary-container px-3 py-1 rounded-full flex items-center gap-1">
            <Activity className="text-on-secondary-container w-3 h-3" />
            <span className="text-xs font-bold text-on-secondary-container uppercase">Improving</span>
          </div>
        </div>
        
        <div className="h-40 w-full relative flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#bcf0ae" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#bcf0ae" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,35 Q15,35 25,25 T50,20 T75,10 T100,5 L100,40 L0,40 Z" fill="url(#greenGradient)" />
            <path d="M0,35 Q15,35 25,25 T50,20 T75,10 T100,5" fill="none" stroke="#3b6934" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-on-surface-variant">
            <span>Mon</span><span>Wed</span><span>Fri</span><span>Today</span>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md border-t border-gray-100 py-3 px-6 flex justify-around items-center rounded-t-3xl">
        <NavButton icon={<Home />} label="Home" active />
        <NavButton icon={<Heart />} label="Health" />
        <NavButton icon={<Calendar />} label="Schedule" />
        <NavButton icon={<Settings />} label="Settings" />
      </nav>
    </div>
  );
}

function NavButton({ icon, label, active = false }) {
  return (
    <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}>
      <div className={`p-1 rounded-lg ${active ? 'bg-primary/10' : ''}`}>{icon}</div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

function SeniorCompanion() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text) return;
    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/chat`, {
        message: text,
        history: messages
      });
      setMessages(prev => [...prev, { role: 'assistant', content: res.data.response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "ขออภัยค่ะ คุณตา/คุณยาย ลองพูดอีกครั้งนะคะ" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (text) => sendMessage(text);

  return (
    <div className="max-w-md mx-auto px-5 pt-16 pb-24 flex flex-col h-screen">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img src="https://i.pravatar.cc/100?img=2" alt="Senior" />
          </div>
          <h1 className="text-xl font-bold text-primary">Care-Jai</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-on-surface mb-2">Sawasdee,</h2>
          <p className="text-on-surface-variant text-lg">วันนี้รู้สึกอย่างไรบ้างคะ?</p>
        </div>

        <motion.div 
          animate={isListening ? { scale: [1, 1.1, 1], boxShadow: ["0 0 40px rgba(212, 175, 55, 0.4)", "0 0 80px rgba(212, 175, 55, 0.6)", "0 0 40px rgba(212, 175, 55, 0.4)"] } : { scale: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => {
            setIsListening(!isListening);
            if (!isListening) {
              // Simulate voice start
              setTimeout(() => {
                setIsListening(false);
                sendMessage("สวัสดีจ้า รู้สึกสบายดีนะ");
              }, 3000);
            }
          }}
          className="w-48 h-48 rounded-full orb-gradient orb-glow cursor-pointer flex items-center justify-center relative z-10 transition-transform active:scale-95"
        >
          <Mic className={`w-16 h-16 text-on-primary-container transition-colors ${isListening ? 'text-primary' : ''}`} />
          {isListening && (
            <div className="absolute inset-0 rounded-full animate-ping bg-primary-fixed opacity-50" />
          )}
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          <QuickButton 
            icon={<Smile className="text-green-600" />} 
            text="รู้สึกดี" 
            onClick={() => handleQuickReply("วันนี้รู้สึกดีมากเลย")} 
            color="bg-secondary-fixed" 
          />
          <QuickButton 
            icon={<Moon className="text-blue-600" />} 
            text="ง่วงนอน / เพลีย" 
            onClick={() => handleQuickReply("รู้สึกเพลียๆ อยากพักผ่อน")} 
            color="bg-surface-container-high" 
          />
          <QuickButton 
            icon={<Users className="text-purple-600" />} 
            text="อยากคุยกับลูกหลาน" 
            onClick={() => handleQuickReply("อยากโทรหาลูกหลานจัง")} 
            color="bg-tertiary-fixed" 
          />
        </div>
      </div>

      {/* Chat Overlay */}
      <AnimatePresence>
        {messages.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="fixed bottom-20 left-5 right-5 max-w-md mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 h-64 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-on-surface'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-xs text-gray-400 animate-pulse">AI กำลังคิด...</div>}
            </div>
            <div className="flex gap-2">
              <input 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none" 
                placeholder="พิมพ์ข้อความ..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
              />
              <button 
                onClick={() => sendMessage(input)} 
                className="bg-primary text-white p-2 rounded-full"
              >
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md border-t border-gray-100 py-3 px-6 flex justify-around items-center rounded-t-3xl">
        <NavButton icon={<Home />} label="หน้าแรก" active />
        <NavButton icon={<Activity />} label="สุขภาพ" />
        <NavButton icon={<Calendar />} label="ตาราง" />
        <NavButton icon={<Settings />} label="ตั้งค่า" />
      </nav>
    </div>
  );
}

function QuickButton({ icon, text, onClick, color }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl shadow-sm transition-transform active:scale-95 ${color} text-on-surface`}
    >
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="font-semibold text-lg">{text}</span>
    </button>
  );
}
