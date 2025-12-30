import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ShieldCheck,
  Zap,
  Minus,
  Plus,
  Mail,
  Loader2,
} from 'lucide-react';
import { useToast } from '../hooks/useToast';
import USDT from '/images/usdt.avif';
import USDC from '/images/usdc.avif';
import Bitcoin from '/images/bitcoin.avif';
import type { StoreProduct } from '../lib/types';

export const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const state = location.state as { product: StoreProduct } | null;
  const product = state?.product;

  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Production-grade Email Regex
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isEmailValid = validateEmail(email);
  const totalPrice = product ? product.price * quantity : 0;

  const handleInitializePayment = useCallback(async () => {
    if (!product || !isEmailValid || isProcessing) return;

    setIsProcessing(true);
    showToast('Initializing secure connection...', 'info', 3000);

    // Identify account type for backend
    let accountType = 0;
    const category = product.category.toLowerCase();
    const name = product.name.toLowerCase();

    if (category === 'proxy') {
      accountType = 2;
    } else if (category === 'tools' || category === 'software') {
      accountType = 3;
    } else if (category === 'accounts') {
      if (name.includes('twitter') || name.includes('x')) {
        accountType = 0;
      } else if (name.includes('instagram')) {
        accountType = 1;
      }
    }

    try {
      const response = await fetch(
        'https://notreach.runasp.net/api/NowPay/Create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            price: totalPrice,
            payCurrency: 'usd',
            email: email,
            type: accountType,
            quantity: quantity,
          }),
        }
      );

      if (!response.ok) throw new Error('Gateway Error');

      const data = await response.json();

      if (data.invoice_url) {
        showToast(
          'Success! Redirecting to payment gateway...',
          'success',
          4000
        );
        // Delay redirect slightly so user can read the success toast
        setTimeout(() => {
          window.location.assign(data.invoice_url);
        }, 800);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      showToast(
        'Network error: Unable to reach settlement server.',
        'error',
        5000
      );
      setIsProcessing(false);
    }
  }, [
    product,
    totalPrice,
    email,
    isEmailValid,
    quantity,
    isProcessing,
    showToast,
  ]);

  if (!product) {
    return <div className="min-h-screen bg-[#050508]" />;
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Infrastructure
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Visual Preview */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-500/10 blur-xl rounded-[3rem] opacity-50 transition-opacity" />
            <div className="relative aspect-square rounded-4xl overflow-hidden border border-white/10 bg-[#0c0c12]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col h-full">
            <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
              <Zap className="w-3 h-3" />
              Infrastructure Settlement
            </div>

            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4">
              {product.name}
            </h1>
            <p className="text-slate-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Quantity
                </span>
                <div className="flex items-center gap-6 bg-black rounded-2xl p-2 border border-white/5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-white/10 rounded-xl cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-black w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-white/10 rounded-xl cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-8">
              <label className="block text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-4">
                Delivery Destination
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail
                    className={`w-4 h-4 transition-colors ${
                      isEmailValid ? 'text-purple-500' : 'text-slate-500'
                    }`}
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your operational email"
                  className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none transition-all placeholder:text-slate-600 ${
                    email && !isEmailValid
                      ? 'border-red-500/50 bg-red-500/5'
                      : 'border-white/10 focus:border-purple-500/50 focus:bg-white/10'
                  }`}
                />
              </div>
            </div>

            {/* Total & Action */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="mb-10 flex items-center gap-8">
                <img
                  src={Bitcoin}
                  className="h-7 w-auto drop-shadow-[0_0_8px_rgba(247,147,26,0.3)]"
                />
                <img
                  src={USDC}
                  className="h-7 w-auto drop-shadow-[0_0_8px_rgba(39,117,202,0.3)]"
                />
                <img
                  src={USDT}
                  className="h-7 w-auto drop-shadow-[0_0_8px_rgba(38,161,123,0.3)]"
                />
                <div className="h-10 w-px bg-white/10 mx-2" />
                <span className="text-[10px] font-medium text-slate-600 italic">
                  Settlement Ready
                </span>
              </div>

              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-slate-500 text-xs uppercase font-black tracking-widest mb-1">
                    Total Investment
                  </p>
                  <p className="text-5xl font-black text-white">
                    ${totalPrice.toLocaleString()}
                  </p>
                </div>
                <p className="text-green-500 text-xs font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Encrypted
                </p>
              </div>

              <button
                onClick={handleInitializePayment}
                disabled={!isEmailValid || isProcessing}
                className={`w-full py-6 rounded-4xl font-black text-xl transition-all active:scale-[0.98] cursor-pointer shadow-2xl ${
                  isEmailValid && !isProcessing
                    ? 'bg-white text-black hover:bg-purple-400 shadow-purple-500/20'
                    : 'bg-white/10 text-slate-500 cursor-not-allowed border border-white/5'
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </span>
                ) : isEmailValid ? (
                  'Initialize Payment'
                ) : (
                  'Enter Valid Email'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
