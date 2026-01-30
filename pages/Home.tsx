
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SolarCalculator from '../components/SolarCalculator';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* HERO SECTION: Bright solar panel background with centered layout */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2800&q=90" 
            alt="Bright Sunny Solar Panel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/30 lg:to-black/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="text-white lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
                  Smart <span className="text-emerald-400">Energy</span> <br />
                  Refined by <br />
                  <span className="text-yellow-400">Sunlight</span>
                </h1>
                
                <div className="flex justify-center lg:justify-start space-x-12 mb-12">
                  <div className="group">
                    <span className="text-4xl md:text-5xl font-black block text-emerald-400 group-hover:text-yellow-400 transition-colors">25%</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Efficiency</span>
                  </div>
                  <div className="group">
                    <span className="text-4xl md:text-5xl font-black block text-emerald-400 group-hover:text-yellow-400 transition-colors">40%</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Annual Savings</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link
                    to="/contact"
                    className="bg-emerald-500 text-white px-10 py-5 rounded-full font-black hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20 uppercase tracking-widest text-sm"
                  >
                    Get a Free Consultation
                  </Link>
                  <div className="hidden md:flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 rounded-full border border-white/20">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest">Active Installs: 500+</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Calculator Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-full max-w-[460px]"
              >
                <SolarCalculator />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION: High Energy Emerald Gradient Background */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-yellow-50">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-50"></div>
        
        {/* Subtle decorative solar pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover"
            alt="Solar Background Pattern"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-5 gap-20 items-center relative z-10">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tighter">
              Why <span className="text-emerald-500">Choose</span><br />
              <span className="text-emerald-500">Solar</span><span className="text-yellow-400">lite</span>
            </h2>
            <p className="text-gray-600 text-xl font-medium max-w-sm">Smart technology meets sustainable architectural design for your future.</p>
            
            <div className="mt-12 hidden lg:block">
              <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl shadow-emerald-500/20">
                <i className="fas fa-charging-station"></i>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: '01', title: 'High Efficiency Panels', color: 'bg-white', text: 'text-gray-900' },
              { id: '02', title: 'Custom Installation', color: 'bg-emerald-500', text: 'text-white' },
              { id: '03', title: 'Smart Monitoring', color: 'bg-white', text: 'text-gray-900' },
              { id: '04', title: 'Warranty & Support', color: 'bg-white', text: 'text-gray-900' }
            ].map((benefit) => (
              <div key={benefit.id} className={`${benefit.color} p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden`}>
                <span className={`text-sm font-black mb-6 block tracking-widest uppercase ${benefit.text === 'text-white' ? 'text-white/50' : 'text-emerald-500'}`}>{benefit.id}</span>
                <h4 className={`text-2xl font-black mb-3 ${benefit.text === 'text-white' ? 'text-white' : 'text-gray-900'}`}>{benefit.title}</h4>
                <p className={`text-sm font-medium ${benefit.text === 'text-white' ? 'text-white/80' : 'text-gray-400'}`}>
                  Premium components engineered for maximum energy yield and modern aesthetics.
                </p>
                <div className={`mt-8 w-12 h-12 rounded-full flex items-center justify-center transition-all ${benefit.text === 'text-white' ? 'bg-white/20 group-hover:bg-white/40' : 'bg-yellow-400 group-hover:bg-emerald-500'}`}>
                  <i className={`fas fa-arrow-right text-xs text-white`}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION: Light Emerald Soft Background */}
      <section className="py-32 bg-emerald-50/30 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter">
              From <span className="text-emerald-500">Sunlight</span> to <br />
              <span className="text-emerald-500">Power</span> - Our Process
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">The Roadmap to energy independence</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t-4 border-dotted border-emerald-300 -z-0 opacity-50"></div>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { id: '01', step: 'Consultation', desc: 'Assess energy goals.' },
                { id: '02', step: 'Design & Proposal', desc: 'Custom engineering.' },
                { id: '03', step: 'Installation', desc: 'White-glove mounting.' },
                { id: '04', step: 'Monitoring & Support', desc: 'Live data activation.' }
              ].map((item) => (
                <div key={item.id} className="text-center relative z-10 group">
                  <div className="w-24 h-24 bg-white border-[6px] border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl transition-all group-hover:scale-110 group-hover:border-yellow-400">
                    <span className="text-3xl font-black text-emerald-500 transition-colors group-hover:text-yellow-400">{item.id}</span>
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-3">{item.step}</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
