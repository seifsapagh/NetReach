import type { StoreProduct } from '../types/component.types';
import twitter from '../../assets/twitter.avif';
import instagram from '../../assets/instagram.avif';
import instagramTool from '../../assets/instagram-tool.avif';
import twiterTool from '../../assets/twitter-tool.avif';

export const STORE_PRODUCTS: StoreProduct[] = [
  // ACCOUNTS
  {
    id: 'acc-01',
    category: 'accounts',
    name: 'X/Twitter',
    description: '2018-2024 Old Twitter/X Account with MAIL ACCESS',
    price: 4,
    image: twitter,
  },
  {
    id: 'acc-02',
    category: 'accounts',
    name: 'X/Twitter',
    description: '2007 to 2016 Old Twitter/X Account with MAIL ACCESS',
    price: 5,
    image: twitter,
  },
  {
    id: 'acc-03',
    category: 'accounts',
    name: 'Instagram',
    description: '2007 to 2017 Old Instagram Account with MAIL ACCESS',
    price: 5,
    image: instagram,
  },

  // Proxy
  {
    id: 'px-01',
    category: 'proxy',
    name: 'Mobile ISP Proxy (USA / EU)',
    description: `Real 4G/5G mobile IPs with ultra-low ban rates.
      Ideal for X, Instagram, and high-risk automation at scale.`,
    price: 10,
  },
  {
    id: 'px-02',
    category: 'proxy',
    name: 'Residential ISP Proxy (USA / EU)',
    description: `Real residential IPs from trusted ISPs.
Stable, low-detection proxies for automation, scraping, and account management.`,
    price: 10,
  },

  // TOOLS
  {
    id: 'tl-01',
    category: 'tools',
    name: 'MKT Instagram Software​',
    description:
      'MKT Instagram Software supports automatic posting of sales posts, Instagram reels, automatic searching and following based on potential Username lists, facilitates easy order closing.',
    price: 10,
    image: instagramTool,
  },
  {
    id: 'tl-02',
    category: 'tools',
    name: 'MKT Twitter Software',
    description:
      'MKT Twitter Software facilitates automatic Twitter profile updates, posting, bulk account interaction, earning, and automated data scanning of any account of any target audience',
    price: 10,
    image: twiterTool,
  },
];
