
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // LOGIC: Check if we are on the Home page or the Qualified page
  const isHome = location.pathname === '/';
  const isQualified = location.pathname === '/qualified';

  return (
    // Added z-[100] and isolate to ensure buttons are ALWAYS clickable
    <nav className={`fixed w-full z-[100] isolate transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all">
             <i className="fas fa-sun text-white text-sm"></i>
          </div>
          <span className={`text-2xl font-black tracking-tighter ${
            // If on Qualified page or Home (while not scrolled), use white text
            (!isScrolled && (isHome || isQualified)) ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-emerald-500">Solar</span><span className="text-yellow-400">lite</span>
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-emerald-500 ${
                // Improved logic for text color visibility
                (!isScrolled && (isHome || isQualified)) ? 'text-white' : 'text-gray-500'
              } ${location.pathname === link.path ? 'text-emerald-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-emerald-500 text-white px-8 py-3 rounded-full font-black hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 text-xs uppercase tracking-[0.2em]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1">
             <Link to="/" className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                 <i className="fas fa-sun text-white text-sm"></i>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                <span className="text-emerald-500">Solar</span><span className="text-yellow-400">lite</span>
              </span>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed">
              Leading the transition to a sustainable future with premium solar architectural solutions. Energy, evolved.
            </p>
          </div>
          <div>
            <h4 className="font-black text-emerald-400 text-sm uppercase tracking-widest mb-10">Company</h4>
            <ul className="space-y-6 text-sm font-bold text-gray-400">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-emerald-400 text-sm uppercase tracking-widest mb-10">Legal</h4>
            <ul className="space-y-6 text-sm font-bold text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-emerald-400 cursor-pointer">Terms of Service</li>
              <li className="hover:text-emerald-400 cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-emerald-400 text-sm uppercase tracking-widest mb-10">Follow Us</h4>
            <div className="flex space-x-6">
               {[
                 { icon: 'fa-facebook-f', color: 'hover:bg-blue-600' },
                 { icon: 'fa-twitter', color: 'hover:bg-blue-400' },
                 { icon: 'fa-instagram', color: 'hover:bg-pink-500' },
                 { icon: 'fa-linkedin-in', color: 'hover:bg-blue-700' }
               ].map((social, i) => (
                 <a key={i} href="#" className={`w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300`}>
                    <i className={`fab ${social.icon}`}></i>
                 </a>
               ))}
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
          <span>© 2026 <span className="text-emerald-500">Solar</span><span className="text-yellow-400">lite</span> Inc.</span>
          <div className="flex space-x-10 mt-6 md:mt-0">
             <span>Crafted with Purpose</span>
             <span>Palo Alto, CA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // Changed bg-white to an overflow-x-hidden container
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
