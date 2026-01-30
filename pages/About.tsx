
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Founded', value: '2015' },
    { label: 'Installations', value: '2.5k+' },
    { label: 'Team Members', value: '150+' },
    { label: 'GWh Generated', value: '85' },
  ];

  const leadership = [
    {
      name: 'Marcus Chen',
      role: 'CEO & Founder',
      bio: 'Former renewable energy architect with a vision for decentralized power.',
      img: 'https://i.pravatar.cc/400?u=marcus'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Technology Officer',
      bio: 'Specialist in high-efficiency photovoltaic integration and smart grid systems.',
      img: 'https://i.pravatar.cc/400?u=sarah'
    },
    {
      name: 'David Rivera',
      role: 'Director of Operations',
      bio: 'Over 20 years of experience in large-scale infrastructure and solar logistics.',
      img: 'https://i.pravatar.cc/400?u=david'
    }
  ];

  const values = [
    { title: 'Absolute Quality', desc: 'We only deploy Tier-1 components that exceed industry standards for longevity.', icon: 'fa-check-double' },
    { title: 'Innovation First', desc: 'Our R&D team continuously integrates the latest in smart-monitoring and storage tech.', icon: 'fa-microchip' },
    { title: 'Radical Transparency', desc: 'Real-time reporting and honest estimates are the bedrock of our client relationships.', icon: 'fa-eye' },
    { title: 'Global Impact', desc: 'Every installation is a step toward a carbon-neutral world. We measure success in offsets.', icon: 'fa-globe' }
  ];

  return (
    <div className="animate-fadeIn pt-24 bg-white min-h-screen">
      {/* Hero Section: The Business Identity */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block"
            >
              Our Identity
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter leading-[0.95]"
            >
              Powering Progress <br />
              <span className="text-emerald-500 underline decoration-yellow-400 decoration-8">Since 2015.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl"
            >
              Solarlite wasn't built to just install panels. We were founded to redefine how humanity interacts with energy—turning every roof into a high-performance power plant.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Stats Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-900 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="text-emerald-400 text-5xl md:text-6xl font-black block mb-2">{stat.value}</span>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-24 bg-emerald-50/30 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-yellow-400 rounded-[4rem] rotate-3 -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=90" 
               alt="Our Mission in Action" 
               className="rounded-[3.5rem] shadow-2xl w-full aspect-video object-cover"
             />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">The Solarlite Mission</h2>
            <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
              <p>
                Our journey began in a small workshop in Palo Alto. While others focused on scale, we focused on architectural integration and intelligence. We believed that solar should be as beautiful as it is functional.
              </p>
              <p>
                Today, Solarlite is a leader in premium renewable infrastructure. We partner with homeowners and businesses who refuse to settle for the status quo. We don't just sell energy; we sell energy independence.
              </p>
            </div>
            <div className="mt-12">
               <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl border border-emerald-100 shadow-sm w-fit">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
                     <i className="fas fa-quote-left"></i>
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900">"We are architects of the sun."</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Marcus Chen, CEO</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">The Minds Behind The <span className="text-emerald-500">Light</span></h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Our Leadership Team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[3rem] mb-8 aspect-square shadow-xl">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                      <div className="flex space-x-4">
                         <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-emerald-500 transition-all"><i className="fab fa-linkedin-in"></i></a>
                         <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-emerald-500 transition-all"><i className="fab fa-twitter"></i></a>
                      </div>
                   </div>
                </div>
                <h4 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">{member.name}</h4>
                <p className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 font-medium leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">How We Run <br />The <span className="text-emerald-500">Business</span></h2>
              <p className="text-gray-500 text-xl font-medium mb-12">Built on pillars of engineering excellence and uncompromising ethics.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {values.map((val, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <i className={`fas ${val.icon} text-xl`}></i>
                    </div>
                    <h4 className="font-black text-gray-900 text-xl mb-3 tracking-tight">{val.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative lg:block hidden">
               <div className="bg-emerald-500 rounded-[4rem] h-[600px] w-full flex items-center justify-center p-20 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                     <i className="fas fa-sun text-[600px] text-white animate-spin-slow"></i>
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-white text-4xl font-black mb-8 leading-tight">Join our mission to electrify the future.</h3>
                    <Link to="/contact" className="bg-white text-emerald-500 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-yellow-400 hover:text-white transition-all shadow-xl">
                      Partner With Us
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
