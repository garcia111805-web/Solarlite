
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Qualified: React.FC = () => {
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
    <div className="animate-fadeIn pt-24 min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Priority Status Confirmed</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">
                You're <span className="text-emerald-500">Qualified</span>.
              </h1>
              <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Based on your initial data, your property is an ideal candidate for high-efficiency solar. Please provide the final details below to lock in your priority consultation.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(16,185,129,0.1)] border border-emerald-50 p-4 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            
            {/* GHL Form Integration */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/VMHFzkclWwol8I9KCjdC"
              style={{ width: '100%', minHeight: '800px', border: 'none', borderRadius: '3px' }}
              id="inline-VMHFzkclWwol8I9KCjdC" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Qualified lead"
              data-height="undefined"
              data-layout-iframe-id="inline-VMHFzkclWwol8I9KCjdC"
              data-form-id="VMHFzkclWwol8I9KCjdC"
              title="Qualified lead"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Qualified;
