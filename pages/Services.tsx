
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn pt-24 bg-gradient-to-b from-emerald-50/50 via-white to-white min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[4.5rem] blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1200&q=90" 
              alt="Professional Solarlite Installation" 
              className="relative rounded-[4rem] shadow-3xl w-full h-[700px] object-cover"
            />
            {/* Decorative yellow badge */}
            <div className="absolute -bottom-10 -right-10 bg-yellow-400 p-10 rounded-[2.5rem] shadow-2xl text-white transform hover:rotate-6 transition-transform">
              <i className="fas fa-award text-5xl"></i>
            </div>
          </motion.div>
          
          {/* Right Side: Content */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-10 leading-[1.2] tracking-tight"
            >
              We provide <span className="text-emerald-500">sustainable</span> and affordable solar energy solutions to power homes and businesses.
            </motion.h1>
            
            {/* Social Proof Badge */}
            <div className="flex items-center space-x-6 mb-16 p-6 bg-white rounded-[2rem] w-fit shadow-xl shadow-emerald-500/5 border border-emerald-50">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-14 h-14 rounded-full border-4 border-white shadow-lg" alt="Happy Customer" />
                ))}
                <div className="w-14 h-14 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white font-black text-xs">5k+</div>
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1 space-x-1">
                  {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star text-sm"></i>)}
                </div>
                <span className="text-sm font-black text-gray-800 uppercase tracking-[0.2em]">5,000+ Happy Clients</span>
              </div>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-2 gap-12">
              {[
                { title: 'Certified Experts', icon: 'fa-user-tie', desc: 'Masters of energy engineering.' },
                { title: 'Eco-Friendly Systems', icon: 'fa-leaf', desc: '100% renewable materials.' },
                { title: 'Seamless Installation', icon: 'fa-bolt', desc: '24-hour rapid activation.' },
                { title: 'Long-Term Savings', icon: 'fa-chart-line', desc: 'Maximum ROI guaranteed.' }
              ].map((feature, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-16 h-16 bg-white shadow-xl border border-gray-100 rounded-3xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
                    <i className={`fas ${feature.icon} text-2xl`}></i>
                  </div>
                  <h4 className="font-black text-xl text-gray-900 mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
