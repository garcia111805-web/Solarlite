
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Mountain Vista Estate', 
    category: 'Utility Scale', 
    imageUrl: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1200&q=80', 
    description: 'A massive high-performance solar array integrated into a pristine mountain valley to maximize clean energy capture.' 
  },
  { 
    id: 2, 
    title: 'Tech Hub Office Park', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80', 
    description: 'Industrial rooftop solution powering an entire corporate campus with sustainable energy.' 
  },
  { 
    id: 3, 
    title: 'Lakeside Modern', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1200&q=80', 
    description: 'Ultra-thin solar tiles providing zero-net energy for this premium waterfront residence.' 
  },
  { 
    id: 4, 
    title: 'Skyline Logistics', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80', 
    description: 'Large-scale warehouse installation optimized for peak load distribution and storage.' 
  },
  { 
    id: 5, 
    title: 'Green Valley Retreat', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80', 
    description: 'Off-grid residential installation featuring smart-tracking solar panel technology.' 
  },
  { 
    id: 6, 
    title: 'Eco-Park Shopping Center', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1200&q=80', 
    description: 'Advanced solar canopy system that provides both clean power and EV charging stations.' 
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter || (filter === 'Commercial' && p.category === 'Utility Scale'));

  return (
    <div className="animate-fadeIn pt-24 min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block"
            >
              Our Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter"
            >
              Premium <span className="text-emerald-500">Installations</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-xl font-medium max-w-2xl mx-auto mb-12"
            >
              Discover how Solarlite integrates high-performance energy solutions into modern architecture.
            </motion.p>
            
            <div className="flex justify-center space-x-6">
              {['All', 'Residential', 'Commercial'].map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onClick={() => setFilter(cat)}
                  className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all ${
                    filter === cat 
                      ? 'bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30' 
                      : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm border border-gray-100'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[3rem] mb-8 aspect-[4/3] shadow-xl border border-white bg-gray-100">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="px-2">
                    <div className="flex items-center space-x-3 mb-3">
                       <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight transition-colors group-hover:text-emerald-500">{project.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-lg">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Partners / Trust Bar Section */}
      <section className="py-24 border-t border-gray-100/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-12">Trusted by Leading Architectural Firms</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale">
            <i className="fab fa-apple text-5xl"></i>
            <i className="fab fa-google text-5xl"></i>
            <i className="fab fa-amazon text-5xl"></i>
            <i className="fab fa-microsoft text-5xl"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
