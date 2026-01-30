
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SolarCalculator: React.FC = () => {
  const [bill, setBill] = useState(250);
  const [isInteracting, setIsInteracting] = useState(false);
  const navigate = useNavigate();

  const stats = useMemo(() => {
    // These multipliers are calibrated to match the proportions in the reference image
    const twentyYearSavings = bill * 204; // ~$51,000 for $250 bill
    const annualSavings = twentyYearSavings / 20;
    const systemSize = Math.max(3, Math.round(bill / 27.7));
    const co2Offset = Math.round(systemSize * 1.55);

    return {
      annual: annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      total: twentyYearSavings.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      system: systemSize,
      co2: co2Offset
    };
  }, [bill]);

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] max-w-[480px] w-full border border-gray-100/80 relative animate-fadeIn">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="text-yellow-400 text-3xl">
          <i className="fas fa-sun"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
            <span className="text-emerald-500">Solar</span><span className="text-yellow-400">lite</span> Savings
          </h3>
          <p className="text-gray-500 font-medium text-sm">Real-time energy projection</p>
        </div>
      </div>

      {/* Bill Input Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-700 font-semibold text-lg">Monthly Electric Bill</span>
          <span className="text-emerald-500 font-extrabold text-3xl tracking-tight">${bill}</span>
        </div>
        
        <div className="relative h-2 flex items-center mb-4">
          <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
          <div 
            className="absolute h-full bg-emerald-500/10 rounded-full" 
            style={{ width: `${((bill - 100) / 900) * 100}%` }}
          />
          <input 
            type="range" 
            min="100" 
            max="1000" 
            step="10"
            value={bill} 
            onChange={(e) => setBill(parseInt(e.target.value))}
            onMouseDown={() => setIsInteracting(true)}
            onMouseUp={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
            className="absolute w-full h-full opacity-0 cursor-pointer z-20"
          />
          <motion.div 
            className="absolute w-10 h-10 bg-emerald-400 rounded-full shadow-xl shadow-emerald-400/40 flex items-center justify-center pointer-events-none z-10 border-4 border-white"
            animate={{ 
              left: `${((bill - 100) / 900) * 100}%`,
              scale: isInteracting ? 1.15 : 1,
              backgroundColor: isInteracting ? "#10b981" : "#34d399"
            }}
            transition={isInteracting ? { type: "tween", duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }}
            style={{ x: "-50%" }}
          >
             <div className="w-3 h-3 bg-white rounded-full"></div>
          </motion.div>
        </div>
        <div className="flex justify-between text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>$100</span>
          <span>$1,000</span>
        </div>
      </div>

      {/* Result Card (Light Mint Background) */}
      <div className="bg-[#f2fbf7] rounded-[2rem] p-8 border border-emerald-100/50 mb-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 font-bold text-[10px] mb-2 uppercase tracking-[0.2em]">Estimated 20-Year Savings</p>
          <motion.div 
            key={stats.total}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-emerald-500 tracking-tighter"
          >
            ${stats.total}
          </motion.div>
        </div>

        {/* Triple Grid Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center">
            <i className="fas fa-bolt text-emerald-400 text-xl mb-3"></i>
            <div className="text-gray-900 font-extrabold text-xl leading-none mb-1">{stats.system}</div>
            <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest text-center">kW Size</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center">
            <i className="fas fa-sun text-yellow-400 text-xl mb-3"></i>
            <div className="text-gray-900 font-extrabold text-xl leading-none mb-1">${stats.annual}</div>
            <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest text-center">Yearly</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center">
            <i className="fas fa-leaf text-emerald-400 text-xl mb-3"></i>
            <div className="text-gray-900 font-extrabold text-xl leading-none mb-1">{stats.co2}</div>
            <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest text-center">Tons CO₂</div>
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <button 
        onClick={() => navigate('/contact')}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-black py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center justify-center space-x-3 text-lg group"
      >
        <span>Get Your Free Quote</span>
        <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
      </button>
    </div>
  );
};

export default SolarCalculator;
