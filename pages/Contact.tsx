
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject the GHL form embed script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="animate-fadeIn pt-24 min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                Ready to start your <span className="text-emerald-500">Solar<span className="text-yellow-400">lite</span></span> journey?
              </h1>
              <p className="text-gray-600 text-xl font-medium leading-relaxed mb-12">
                Complete our quick energy survey below. Our <span className="text-emerald-500">Solar</span><span className="text-yellow-400">lite</span> consultants will analyze your data and reach out with a precision quote.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0 transition-all group-hover:bg-emerald-400 group-hover:rotate-6 shadow-lg shadow-emerald-500/20">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">Phone</h4>
                    <p className="text-gray-500 font-medium">+1 (555) SOLAR-LT</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-white shrink-0 transition-all group-hover:bg-yellow-300 group-hover:rotate-6 shadow-lg shadow-yellow-400/20">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">Email</h4>
                    <p className="text-gray-500 font-medium">hello@solarlite.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0 transition-all group-hover:bg-emerald-400 group-hover:rotate-6 shadow-lg shadow-emerald-500/20">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">Office</h4>
                    <p className="text-gray-500 font-medium">123 Sunbeam Path, Palo Alto, CA 94301</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 md:p-8 rounded-[3.5rem] shadow-2xl shadow-emerald-500/10 border border-emerald-50 overflow-hidden min-h-[600px]"
          >
            {/* GHL Survey Integration */}
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/YWqmysVFO3RP2slV6Hwy" 
              style={{ border: 'none', width: '100%', minHeight: '600px' }} 
              scrolling="no" 
              id="YWqmysVFO3RP2slV6Hwy" 
              title="survey"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
