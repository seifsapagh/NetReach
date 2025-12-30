import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#050508]/80 backdrop-blur-xl border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white select-none hover:opacity-80 transition-opacity"
        >
          NET<span className="text-purple-500">REACH</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
          <a href="/#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a
            href="/#how-it-works"
            className="hover:text-white transition-colors"
          >
            Infrastructure
          </a>
          <a href="/#faq" className="hover:text-white transition-colors">
            Operational FAQ
          </a>

          <button
            onClick={() => navigate('/store')}
            className="flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer font-bold text-[10px] uppercase tracking-wider active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Asset Store
          </button>
        </div>
        <button
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full hover:bg-purple-400 transition-all duration-300 cursor-pointer font-bold text-xs uppercase tracking-wider active:scale-95 shadow-lg shadow-white/5"
          onClick={() => window.open('https://t.me/netreach_team', '_blank')}
        >
          Deploy Now
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <button
          className="md:hidden text-white cursor-pointer p-2 transition-transform active:scale-90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-x-0 top-0 h-screen bg-[#050508] z-[-1] transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center p-12 space-y-10">
          <div className="space-y-2">
            <p className="text-purple-500 text-[10px] uppercase tracking-[0.3em] font-bold">
              Navigation
            </p>
            <div className="h-px w-full bg-white/10" />
          </div>

          <div className="flex flex-col space-y-6">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black text-white tracking-tighter"
            >
              Home
            </Link>
            <button
              onClick={() => {
                navigate('/store');
                setMobileMenuOpen(false);
              }}
              className="text-left text-4xl font-black text-purple-500 tracking-tighter"
            >
              Store
            </button>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black text-white tracking-tighter"
            >
              Features
            </a>
          </div>

          <button
            className="w-full py-5 bg-white text-black rounded-2xl text-lg font-bold"
            onClick={() => window.open('https://t.me/netreach_team', '_blank')}
          >
            Contact on Telegram
          </button>
        </div>
      </div>
    </header>
  );
};
