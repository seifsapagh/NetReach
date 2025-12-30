import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCart, Package, Layers } from 'lucide-react';
import type { StoreProduct } from '../lib/types/component.types';
import { STORE_PRODUCTS } from '../lib/constants/products';
import { useNavigate } from 'react-router-dom';

type Category = 'all' | 'accounts' | 'proxy' | 'tools';
const CATEGORIES: Category[] = ['all', 'accounts', 'proxy', 'tools'];

const fetchProducts = async (): Promise<StoreProduct[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return STORE_PRODUCTS;
};

export const StorePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const handleAcquire = (product: StoreProduct) => {
    navigate('/store/checkout', { state: { product } });
  };

  const filteredProducts = data?.filter((product) =>
    activeCategory === 'all' ? true : product.category === activeCategory
  );

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute animate-ping h-12 w-12 rounded-full bg-purple-500/20"></div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500"></div>
        </div>
      </div>
    );

  return (
    <div className="pt-32 pb-20 bg-[#050508] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <Layers className="w-3 h-3" />
            Infrastructure Assets
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-4">
            NetReach <span className="text-purple-500">STORE</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts?.map((product: StoreProduct) => (
            <div
              key={product.id}
              className="group p-8 rounded-[2.5rem] bg-[#0c0c12] border border-white/5 hover:border-purple-500/40 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-square bg-purple-500/5 rounded-3xl mb-8 flex items-center justify-center border border-white/5 group-hover:bg-purple-500/10 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Package className="w-12 h-12 text-purple-400 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                )}
              </div>

              <div className="mb-2 flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {product.name}
                </h3>
                <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-500 uppercase font-bold tracking-tighter">
                  {product.category}
                </span>
              </div>

              <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">
                    Pricing
                  </span>
                  <span className="text-2xl font-black text-white">
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={() => handleAcquire(product)}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-bold hover:bg-purple-400 transition-all active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Acquire
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts?.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
              No assets found in this sector.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
