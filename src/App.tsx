/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  LayoutGrid,
  Columns2,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Filter,
  ChevronDown,
  Check
} from 'lucide-react';

import pa1Img from './assets/images/regenerated_image_1791972004507.jpg';
import pa2Img from './assets/images/regenerated_image_1791972007426.jpg';
import pa4Img from './assets/images/regenerated_image_1791972009250.jpg';
import pa5Img from './assets/images/regenerated_image_1791972012612.jpg';
import pa6Img from './assets/images/regenerated_image_1791972015105.jpg';
import pa7Img from './assets/images/regenerated_image_1791972017215.jpg';
import ec4Img from './assets/images/regenerated_image_1791972019893.jpg';
import portraitImg from './assets/images/regenerated_image_1791972021750.jpg';

export type ProjectSubCategory = 'Beauty' | 'Lifestyle' | 'Food & Beverage';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  subCategory: ProjectSubCategory;
  image: string;
  aspectRatio: '4/5' | '1/1';
  number?: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. AI product advertising (8 items)
  {
    id: 'pa-1',
    title: 'YOUMI BEAUTY SHAMPOO',
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: pa1Img,
    aspectRatio: '4/5',
    number: '01'
  },
  {
    id: 'pa-2',
    title: 'VERSACE PERFUME',
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: pa2Img,
    aspectRatio: '4/5',
    number: '02'
  },
  {
    id: 'pa-3',
    title: 'Charlotte tilbury',
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS-1uCRgQroLOOvyRPTqDpcMgu6b0pdemKW6Lw5e0z3sfmAUFTdtoqeJH6ZDF_35djm94HyUuGYsJywqLEgYCKq3xZz8kFzcZkfqavcshomtSfY7AnLOgayneRS9QjY6EAF1JmJF9WcPmiou1TU-df5EtjwINTND4pdYsmHdJVDEJyjyFfWbfHJ2AzitawKqhUIaZ0H-lMWYs8w2VHEIrYajtj71StkWHStj-Nq_VV-WzofOP5GqkC0Gt6hGh_SWMjcns',
    aspectRatio: '4/5',
    number: '03'
  },
  {
    id: 'pa-4',
    title: "Kylie Jenner's perfume",
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: pa4Img,
    aspectRatio: '4/5',
    number: '04'
  },
  {
    id: 'pa-5',
    title: 'NARINS BEAUTY AURA',
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: pa5Img,
    aspectRatio: '4/5',
    number: '05'
  },
  {
    id: 'pa-6',
    title: 'POPPI DRINK',
    category: 'AI product advertising',
    subCategory: 'Food & Beverage',
    image: pa6Img,
    aspectRatio: '4/5',
    number: '06'
  },
  {
    id: 'pa-7',
    title: 'IFRAN MANGO APPLICATOR',
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: pa7Img,
    aspectRatio: '4/5',
    number: '07'
  },
  {
    id: 'pa-8',
    title: 'YOUMI BEAUTY HAIR BRUSH',
    category: 'AI product advertising',
    subCategory: 'Beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaWdYTNltxot8qu157e-i-NXnQ8vql_eNMqa75WvjpaPoKWOT6OkBWi4pZMX_9SH0t1__fKgpaL7hu2Dt7RLgVsr6pGNac-sgaUhB4M7ZBSoJVhf8ozZFqbHN9O--Mvc26PWrXJsljnlvnZKlJYEKLHJhA7PiaH6MA0jW42Gw3BAxe10zsuKEPo7B9MGfSQU5l2ZK3V-72lSsrUppMyhWOS-_u3_P2y63SyG9qEjgjcJpPyfxZ5f6uvLzukVkjLWtKKm4',
    aspectRatio: '4/5',
    number: '08'
  },

  // 2. Imaginative campaign concepts > AI UGC (4 items)
  {
    id: 'ugc-1',
    title: 'YOUMI BEAUTY HAIR SET',
    category: 'AI UGC',
    subCategory: 'Beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2waeh6KAhEBKlrlUsusFdkIEIik51M3t3SMoCXmw6TUdrgkoClhw07adqgxYdrmzF8oZ_AaAhQnFgzZORhY8PkfgDg3ZMpww6iUXqXSudg4sFrirCxpKXnQ9ji-96CKVt61j9rTiDRI_pLe0RrEpk3ze7Sa3_YKR69SGmkAQpfJ8i30dIQyn4GsMWDi_iXS8QHeZ0ywD8Y2y4u_01zwfYngtF3dgs8Dhods1wAFkmxOyaEXUtP7fsEayNAJgpNymEryw',
    aspectRatio: '4/5',
    number: '01'
  },
  {
    id: 'ugc-2',
    title: 'SKIN BY SHERIN',
    category: 'AI UGC',
    subCategory: 'Beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_cRYZzMj1idYwuhOLYg7Y4V_3eQOhvL2g0MZ_yXb0DI8FdiLjgXzwy8KQbBH9iHBDL8Qs6iIq_fauw2PvrnMPcVA0aXzCr1-Rnby63kZdvLu7IkY74-sCU6ulmbrYTQ2mV8WGgWwMwm3T3VLhWJMfUeDOBrgFY4GNBxXYkdLc7ExBAHUuk4uuGud5NKFMUMfbR7OPWA_iTrooBah1kFopaFUfPbHnb_-kcr1UXI9RwxIdq_fdr6CT4ri81v0eOp9yVwA',
    aspectRatio: '4/5',
    number: '02'
  },
  {
    id: 'ugc-3',
    title: 'HÄAGEN-DAZS',
    category: 'AI UGC',
    subCategory: 'Food & Beverage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0h2YV8a1Es7sHnBIWYgh456swvTcxRKD0UfuJOHcMsT2S1W2NOCukwtG0e8LYYeeB3NJnQxfhwliZDXo4guHji1tEKYI6CMz6yPnpWZObiismO-yjlTMOyxfbsOH-7KqmAHlM-Hh452siVKnyuSq0Ys_3ImExmgEqMff-Yrjuchic3_UddfnmMP4LshDzJeYIef6GnZW--rXqzTNLJ4Xbwy3TH90A6Ldl0EDM-T_UrgmaVYkdg0Eb5sX2_UJx9rIJTr0',
    aspectRatio: '4/5',
    number: '03'
  },
  {
    id: 'ugc-4',
    title: 'MOROCCAN OIL',
    category: 'AI UGC',
    subCategory: 'Beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAIEh-GC6ThYN9q8kg3ck_rd4o7mj1fPb0EwpJN5oOD5Y3-8EaiJvhmanKMoVLsQv6lxzGGIuffOO50O19OvtYgpTZ3jMGNuHJbFun4jrz7zj-dGbm4hgVaATjxnacLiOgaG8dNHlczugHrm0OI1UuR_8Z4eANxD8YGzj9jPL7je65t_8mmpUnD2CSqAYbu7aLwbalkJ0P6RdkX7fo12PtM06xv81lzBAgCz99iqh_7skrcScdysob99YoUIpHR-sYyfA',
    aspectRatio: '4/5',
    number: '04'
  },

  // 3. AI-assisted graphic design (4 items)
  {
    id: 'gd-1',
    title: 'ANGELINA PARIS',
    category: 'AI-assisted graphic design',
    subCategory: 'Food & Beverage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-qHjOMGBI2vcNZMLEWDMWlKPmpjzkBEWxhG54jXHwVrONgp2ifc5xVEkhavyGqdPGvTv-jFelbMFYFFNOYBkQDdN-kUlthSxviQDCkFCP23KZpgxqAp6eYKueWGfjJ6xzvvHgSb0qC0PLWEiwXnb5619wfAZazgRFieKDVDr6-UJBn4M7e0gaX16ddJt_Dtul5uAxdv2N3JJt9QZc9xiZntbShpjzVsEg_21p_TL-BtrPB46BW9mX428qjPr7qq6veQ',
    aspectRatio: '4/5',
    number: '01'
  },
  {
    id: 'gd-2',
    title: 'NURRI MILK SHAKE',
    category: 'AI-assisted graphic design',
    subCategory: 'Food & Beverage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXoD952G3l9dozW2PwzMR64_8tErwayDW6rp0wnHFNfVu26l_JZs1n_Tz9yhghpkubc_-DfddesAHxeNHTfkqvA9IG1oNHjW6EU0cbFZbe2ZGTXqBFT_GP2VdltXXRfnMMmw12Plq8dFNNw4cQCG3PJc0e5VTZGgLJWyxxILa143Dc7Pqk-lrO8r8c1z6627ue2GrOyOA7-uS_nX9Hn6OG335XStMD1A0C3VsoEocmO5iq4W5Aw75dq5DQDgZWGeWNuhQ',
    aspectRatio: '4/5',
    number: '02'
  },
  {
    id: 'gd-3',
    title: 'Nurri milk shake',
    category: 'AI-assisted graphic design',
    subCategory: 'Food & Beverage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGFxUHBmWqaX-OR3sRiDYUb7E0Q6rdZgTW1IhCAIL_W0qKwcUEB8yrYQ3taBtZGtzF4aotdNmz-zleD-0yobUDiUQUKrNtH5A4mRl187S94QD35Bql-LMByEOn0XSlT-7gtHGTBc7HUPrISz4lB03ta0M0tSsMRQox7fZ1A_sRdcJBAV2VhfEXcW0NUmYd5kPrdxhY-Q7WC8NshDW1swLltfYGesqpUKcoHj0hciOSaTKifHgDRCscI_XTWd0eGqIc4n8',
    aspectRatio: '4/5',
    number: '03'
  },
  {
    id: 'gd-4',
    title: 'FENTY BEAUTY',
    category: 'AI-assisted graphic design',
    subCategory: 'Beauty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_t_ALuv8tCxhXp7tPrZB2C17gBqylyzKoZCOXLreM7NeDY_yacBHS8lXlSKdcpgW6_Mt_eaRmT9RRfEPYUZw6nH34aTwCbj8Bgzm0CRufAOL_6wpTcabtooNkqErY0mgItYU9WrwL27a21ei4vqXpsp1T18GI9EoGI4Okn7ujlEWfx6jxNUG0XPL6Lew7coJcTFD0MfYxin2K0ofvsAgrC93O2Ag-bA-TD0X6jwTo9xqtSi-hlB05GeGHcV5IMV7nhoM',
    aspectRatio: '4/5',
    number: '04'
  },

  // 4. AI-Powered E-commerce Visuals (4 items)
  {
    id: 'ec-1',
    title: 'E-commerce',
    category: 'AI-Powered E-commerce Visuals',
    subCategory: 'Lifestyle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgxer6xYUB_bjYmpLKBZsp7ZDJyjrnhGOk1VfCX8_E06Di2P3UEq-CYf1DO2vCubAu4u4hJNcPQzyb0lN8TfSQJIzWHhVbMLLuBSuFepu3AigS-RFXM29pkfXic1Jf64Zby2iXB5Q6MaPlnEkMbKrD7rntHeiPx5ff75honbGRH0L9uOyNHNS8XAYNc48ArBCTiYwcZW5ta_KmAde-BWSXG6cMCwdeinR--gagBLxgnxPb9hNIN5kA0lBERdYVzwg37Xg',
    aspectRatio: '4/5',
    number: '01'
  },
  {
    id: 'ec-2',
    title: 'E-commerce',
    category: 'AI-Powered E-commerce Visuals',
    subCategory: 'Lifestyle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb5vfXQyYDLgsZ3uR3R57BSw3taLIUFDaTII3irt4TP9vXIatFtUtz80TXLGxs39XDKQMOQid41ywj_24VDopD4l9fXsbp12R9diFDr9L9VMPgKPW7Ay8eHfZj4t5_53ufFuzKG2thkgQug8WEQbQAOyEhpZPAAWi3uXfXVW1lv54zjQBvsWjF_59V6BkEaqmREtjEaeMcgicS2R_XmTi9yUooY5ziwOXeq7lF4O3CchjS3h97zU9ZGFIvsMjzpgjvfKw',
    aspectRatio: '4/5',
    number: '02'
  },
  {
    id: 'ec-3',
    title: 'E-commerce',
    category: 'AI-Powered E-commerce Visuals',
    subCategory: 'Lifestyle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCqzfRb3zyF74zFqssIX0q5UVcpfiKcLvf1BbvtgI47dOLqBmbMzbcH4321hPm4WWG4wE7-LlIKlq-ojLehkLY0Zd3VbqX5BGsIyKzw4KStWjKrj09_jeycqpmpkvO_9f2oPPIh0a7rpJig3WaQDKBaAMfEeSvVTNogFW8CTs-i-HUkpto0OCHRfcL7upEQc4H-RAyxxQckKAN4Dgqsqsw2i-NtZGvlpJnSysU6uAFBum3wny_J8Tie0S5zySnQTffAqU',
    aspectRatio: '4/5',
    number: '03'
  },
  {
    id: 'ec-4',
    title: 'E-commerce',
    category: 'AI-Powered E-commerce Visuals',
    subCategory: 'Lifestyle',
    image: ec4Img,
    aspectRatio: '4/5',
    number: '04'
  }
];

/**
 * Editorial Decorative Divider
 * Adds an antique gold hairline with center diamond emblems for luxury editorial print feel
 */
const EditorialDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full py-10 md:py-14 flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B79A6B]/40 to-[#B79A6B]/15" />
    <div className="flex items-center gap-2 text-[#B79A6B]/70 select-none">
      <span className="w-1.5 h-1.5 rotate-45 border border-[#B79A6B]/70" />
      <span className="w-2.5 h-2.5 rotate-45 bg-[#B79A6B]/40 border border-[#B79A6B]" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#B79A6B]/70" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B79A6B]/40 to-[#B79A6B]/15" />
  </div>
);

/**
 * FadeUp reveal wrapper with smooth luxury easing
 */
const FadeUp = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1], 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Unified Artwork Card Component
 * Guarantees 100% equal size, identical 4/5 aspect ratio, and balanced luxury styling
 */
interface ArtworkCardProps {
  item: PortfolioItem;
  onOpen: (id: string) => void;
  index: number;
}

const ArtworkCard = ({ item, onOpen, index }: ArtworkCardProps) => {
  return (
    <FadeUp delay={(index % 4) * 0.07} className="w-full h-full flex flex-col">
      <div 
        onClick={() => onOpen(item.id)}
        className="art-card group cursor-pointer h-full flex flex-col justify-between"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(item.id); }}
        aria-label={`Open artwork for ${item.title}`}
      >
        <div className="art-img-wrap aspect-[4/5] relative w-full overflow-hidden bg-[#250406]">
          <img 
            src={item.image} 
            alt={item.title} 
            className="art-img w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Subtle bottom hover gradient with View Artwork pill & Zoom trigger */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#3A080B] via-[#3A080B]/60 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] uppercase tracking-wider text-[#D4BC8F] bg-[#3A080B]/85 px-2.5 py-1 rounded-md border border-[#B79A6B]/30 font-medium truncate max-w-[130px]">
              {item.subCategory}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#3A080B] bg-[#B79A6B] px-3 py-1 rounded-full font-semibold shadow-md flex items-center gap-1.5 shrink-0 hover:bg-[#D4BC8F] transition">
              <ZoomIn className="w-3.5 h-3.5" />
              Zoom In
            </span>
          </div>
        </div>

        {/* Unified, equal-height Caption Bar with Subcategory Tag */}
        <div className="h-[64px] px-4.5 py-2.5 bg-[#4A0F13] rounded-b-[15px] flex items-center justify-between border-t border-[#B79A6B]/20 select-none">
          <div className="flex flex-col min-w-0 pr-2">
            <span 
              className="font-serif text-xs md:text-sm tracking-[0.12em] text-[#F3E9DC] uppercase font-medium truncate"
              title={item.title}
            >
              {item.title}
            </span>
            <span className="text-[10px] text-[#B79A6B]/80 uppercase tracking-wider font-medium truncate">
              {item.subCategory}
            </span>
          </div>
          {item.number && (
            <span className="text-[11px] text-[#D4BC8F] font-mono font-medium px-2 py-0.5 rounded border border-[#B79A6B]/35 bg-[#3A080B]/60 shrink-0">
              {item.number}
            </span>
          )}
        </div>
      </div>
    </FadeUp>
  );
};

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [gridCols, setGridCols] = useState<'4' | '2'>('4');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Beauty' | 'Lifestyle' | 'Food & Beverage'>('All');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(Number((prev + 0.5).toFixed(1)), 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(Number((prev - 0.5).toFixed(1)), 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleToggleZoom = () => {
    setZoomLevel(prev => (prev === 1 ? 2 : 1));
  };

  // Lightbox keyboard controls (Esc, Left, Right, +, -, 0)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;

    if (e.key === 'Escape') {
      setLightboxIndex(null);
      setZoomLevel(1);
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % PORTFOLIO_ITEMS.length : null));
      setZoomLevel(1);
    } else if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length : null));
      setZoomLevel(1);
    } else if (e.key === '+' || e.key === '=') {
      handleZoomIn();
    } else if (e.key === '-' || e.key === '_') {
      handleZoomOut();
    } else if (e.key === '0') {
      handleResetZoom();
    }
  }, [lightboxIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, lightboxIndex]);

  const openLightboxById = (id: string) => {
    const idx = PORTFOLIO_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setZoomLevel(1);
    }
  };

  const nextLightboxItem = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % PORTFOLIO_ITEMS.length : null));
    setZoomLevel(1);
  };

  const prevLightboxItem = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length : null));
    setZoomLevel(1);
  };

  const gridClass = gridCols === '4' 
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 items-stretch" 
    : "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch";

  return (
    <div className="min-h-screen bg-[#3A080B] text-[#F3E9DC] selection:bg-[#B79A6B] selection:text-[#3A080B] font-sans relative">
      
      {/* Scroll Progress Bar at very top */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#B79A6B] via-[#D4BC8F] to-[#B79A6B] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Sticky Minimal Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#3A080B]/90 border-b border-[#B79A6B]/20 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a 
            href="#" 
            className="font-serif text-lg md:text-xl tracking-[0.18em] text-[#F3E9DC] hover:text-[#B79A6B] transition font-normal uppercase"
          >
            FARAH EL DELBANI
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] text-[#CDBFAE] font-medium">
            <a href="#tools" className="nav-link hover:text-[#F3E9DC] transition">Tools</a>
            <a href="#ai-product-advertising" className="nav-link hover:text-[#F3E9DC] transition">AI product advertising</a>
            <a href="#imaginative-campaign-concepts" className="nav-link hover:text-[#F3E9DC] transition">Imaginative campaign concepts</a>
            <a href="#ai-assisted-graphic-design" className="nav-link hover:text-[#F3E9DC] transition">AI-assisted graphic design</a>
            <a href="#ai-powered-ecommerce" className="nav-link hover:text-[#F3E9DC] transition">AI-Powered E-commerce Visuals</a>
            <a 
              href="#contact" 
              className="ml-3 px-5 py-2.5 rounded-full border border-[#B79A6B] text-[#B79A6B] hover:bg-[#B79A6B] hover:text-[#3A080B] transition duration-300 text-[11px] font-medium tracking-[0.15em]"
            >
              Excited to work together!
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F3E9DC] hover:text-[#B79A6B] p-2 transition focus:outline-none focus:ring-1 focus:ring-[#B79A6B]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3A080B]/98 border-b border-[#B79A6B]/20 px-6 py-8 flex flex-col gap-4 text-xs uppercase tracking-[0.18em] animate-in slide-in-from-top-4 duration-200">
            <a 
              href="#tools" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CDBFAE] hover:text-[#B79A6B] transition py-1.5"
            >
              Tools
            </a>
            <a 
              href="#ai-product-advertising" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CDBFAE] hover:text-[#B79A6B] transition py-1.5"
            >
              AI product advertising
            </a>
            <a 
              href="#imaginative-campaign-concepts" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CDBFAE] hover:text-[#B79A6B] transition py-1.5"
            >
              Imaginative campaign concepts
            </a>
            <a 
              href="#ai-assisted-graphic-design" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CDBFAE] hover:text-[#B79A6B] transition py-1.5"
            >
              AI-assisted graphic design
            </a>
            <a 
              href="#ai-powered-ecommerce" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CDBFAE] hover:text-[#B79A6B] transition py-1.5"
            >
              AI-Powered E-commerce Visuals
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center py-3 px-6 rounded-full bg-[#B79A6B] text-[#3A080B] font-semibold tracking-wider hover:bg-[#D4BC8F] transition"
            >
              Excited to work together!
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* HERO SECTION */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Bio, Name & Role lines */}
            <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
              
              {/* 1. Name and portfolio badge - fades up FIRST */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.85, 
                  ease: [0.22, 1, 0.36, 1], 
                  delay: 0.15 
                }}
                className="flex flex-col gap-3"
              >
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#B79A6B]"></span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A6B] font-medium">Portfolio</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-tight text-[#F3E9DC]">
                  FARAH EL DELBANI
                </h1>
              </motion.div>

              {/* 2. Intro text & Role lines - fades up SECOND */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.85, 
                  ease: [0.22, 1, 0.36, 1], 
                  delay: 0.38 
                }}
                className="flex flex-col gap-5"
              >
                <p className="text-[#CDBFAE] text-base md:text-lg leading-relaxed font-light max-w-xl">
                  I'm Farah El Delbani, an AI content creator, specializing in creating unique, high-quality AI visuals for brands.My work includes several creative directions, AI product advertising, realistic AI UGC-style content, AI-assisted graphic design, and artistic imaginative campaign concepts.
                </p>

                {/* Exact Role Lines */}
                <div className="pt-2 flex flex-col gap-2.5 text-xs md:text-sm tracking-wider text-[#F3E9DC] font-light border-l-2 border-[#B79A6B]/40 pl-4 my-1">
                  <div>-AI Visual Content Creator</div>
                  <div>-Location: Based in Lebanon| Available for remote projects worldwide</div>
                  <div className="text-[#CDBFAE]">
                    -Email: <a href="mailto:farahaldelbani@icloud.com" className="text-[#D4BC8F] hover:underline">farahaldelbani@icloud.com</a>
                  </div>
                  <div className="text-[#CDBFAE]">
                    -WhatsApp number: <a href="https://wa.me/96170378080" target="_blank" rel="noopener noreferrer" className="text-[#D4BC8F] hover:underline">(+961 70 37 80 80)</a>
                  </div>
                </div>
              </motion.div>

              {/* 4. Primary CTA Button - fades up AFTER portrait */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1], 
                  delay: 0.92 
                }}
                className="pt-3"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B79A6B] text-[#3A080B] font-medium text-xs md:text-sm uppercase tracking-[0.16em] hover:bg-[#D4BC8F] transition duration-300 shadow-lg shadow-black/40 hover:shadow-[#B79A6B]/20"
                >
                  Excited to work together!
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* 3. Right: Arched Portrait Frame - fades up THIRD (before CTA) */}
            <motion.div 
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.9, 
                ease: [0.22, 1, 0.36, 1], 
                delay: 0.65 
              }}
              className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[390px]">
                {/* Antique gold back ring */}
                <div className="absolute -inset-2 rounded-[146px_146px_28px_28px] border border-[#B79A6B]/30 pointer-events-none transform -rotate-1"></div>
                
                <div className="portrait-mask shadow-2xl bg-transparent">
                  <img 
                    src={portraitImg} 
                    alt="Farah El Delbani – AI Visual Content Creator" 
                    className="w-full h-[420px] sm:h-[460px] md:h-[500px] object-cover object-top block transition duration-500"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BC8F]/95 px-3.5 py-1 bg-[#250406]/90 rounded-full border border-[#B79A6B]/40 shadow-md">
                      AI Visual Content Creator
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* TOOLS SECTION */}
        <section id="tools" className="py-14 md:py-18">
          <FadeUp className="mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#F3E9DC] tracking-wide">Tools</h2>
            <div className="w-16 h-[2px] bg-[#B79A6B] mt-3"></div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Column 1: AI Image Tools */}
            <FadeUp delay={0.05} className="p-7 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 shadow-lg flex flex-col">
              <h3 className="font-serif text-base tracking-wider text-[#B79A6B] uppercase mb-6 pb-2.5 border-b border-[#B79A6B]/20">
                AI Image Tools
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Midjourney
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Adobe Firefly
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  NIM
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Nano Banana pro
                </li>
                <li className="px-4 py-2 text-center text-[#D4BC8F]/70 text-xs italic tracking-wider">
                  + more
                </li>
              </ul>
            </FadeUp>

            {/* Column 2: AI video Tools */}
            <FadeUp delay={0.12} className="p-7 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 shadow-lg flex flex-col">
              <h3 className="font-serif text-base tracking-wider text-[#B79A6B] uppercase mb-6 pb-2.5 border-b border-[#B79A6B]/20">
                AI video Tools
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Seedance
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Kling AI
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  DaVinci Al
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  NIM
                </li>
              </ul>
            </FadeUp>

            {/* Column 3: Editing & Retouching tools */}
            <FadeUp delay={0.18} className="p-7 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 shadow-lg flex flex-col">
              <h3 className="font-serif text-base tracking-wider text-[#B79A6B] uppercase mb-6 pb-2.5 border-b border-[#B79A6B]/20">
                Editing &amp; Retouching tools
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  CapCut
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Procreate
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Picsart
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Lightroom
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Adobe Illustrator
                </li>
              </ul>
            </FadeUp>

            {/* Column 4: Creative development tools */}
            <FadeUp delay={0.24} className="p-7 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 shadow-lg flex flex-col">
              <h3 className="font-serif text-base tracking-wider text-[#B79A6B] uppercase mb-6 pb-2.5 border-b border-[#B79A6B]/20">
                Creative development tools
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  ChatGpt
                </li>
                <li className="px-4 py-2.5 rounded-full border border-[#B79A6B]/35 text-[#F3E9DC] text-xs uppercase tracking-wider bg-[#3A080B]/50 hover:border-[#B79A6B] hover:text-[#D4BC8F] transition cursor-default">
                  Claude
                </li>
              </ul>
            </FadeUp>

          </div>
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* CATEGORY FILTER & VIEW BAR */}
        <FadeUp className="mb-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#4A0F13]/90 border border-[#B79A6B]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Buttons / Dropdown */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 text-[#D4BC8F] text-xs uppercase tracking-widest font-medium shrink-0">
                <Filter className="w-3.5 h-3.5 text-[#B79A6B]" />
                <span>Filter by Category:</span>
              </div>

              {/* Desktop / Tablet Pills */}
              <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'All', label: 'All Works', count: PORTFOLIO_ITEMS.length },
                  { id: 'Beauty', label: 'Beauty', count: PORTFOLIO_ITEMS.filter(i => i.subCategory === 'Beauty').length },
                  { id: 'Lifestyle', label: 'Lifestyle', count: PORTFOLIO_ITEMS.filter(i => i.subCategory === 'Lifestyle').length },
                  { id: 'Food & Beverage', label: 'Food & Beverage', count: PORTFOLIO_ITEMS.filter(i => i.subCategory === 'Food & Beverage').length },
                ].map((cat) => {
                  const isActive = selectedFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedFilter(cat.id as any)}
                      className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#B79A6B] text-[#3A080B] shadow-md font-semibold'
                          : 'bg-[#3A080B]/60 text-[#CDBFAE] hover:text-[#F3E9DC] hover:border-[#B79A6B]/60 border border-[#B79A6B]/25'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-[#3A080B]/25 text-[#3A080B]' : 'bg-[#4A0F13] text-[#D4BC8F]'}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Select Dropdown */}
              <div className="sm:hidden relative w-full">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value as any)}
                  className="w-full appearance-none bg-[#3A080B] border border-[#B79A6B]/50 rounded-xl px-4 py-2.5 text-xs uppercase tracking-wider text-[#F3E9DC] focus:outline-none focus:ring-1 focus:ring-[#B79A6B]"
                  aria-label="Filter portfolio categories"
                >
                  <option value="All">All Works ({PORTFOLIO_ITEMS.length})</option>
                  <option value="Beauty">Beauty ({PORTFOLIO_ITEMS.filter(i => i.subCategory === 'Beauty').length})</option>
                  <option value="Lifestyle">Lifestyle ({PORTFOLIO_ITEMS.filter(i => i.subCategory === 'Lifestyle').length})</option>
                  <option value="Food & Beverage">Food & Beverage ({PORTFOLIO_ITEMS.filter(i => i.subCategory === 'Food & Beverage').length})</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B79A6B] pointer-events-none" />
              </div>
            </div>

            {/* Layout Switcher & Active Filter indicator */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {selectedFilter !== 'All' && (
                <button
                  type="button"
                  onClick={() => setSelectedFilter('All')}
                  className="text-xs text-[#D4BC8F] hover:text-[#F3E9DC] underline underline-offset-4 tracking-wider uppercase transition cursor-pointer"
                >
                  Clear filter ({selectedFilter}) &times;
                </button>
              )}

              <div className="flex items-center gap-1.5 bg-[#3A080B]/80 p-1 rounded-full border border-[#B79A6B]/30">
                <button
                  type="button"
                  onClick={() => setGridCols('4')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium transition cursor-pointer ${
                    gridCols === '4' 
                      ? 'bg-[#B79A6B] text-[#3A080B] shadow-sm font-semibold' 
                      : 'text-[#CDBFAE] hover:text-[#F3E9DC]'
                  }`}
                  title="4-column uniform grid"
                  aria-pressed={gridCols === '4'}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>4 Cols</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGridCols('2')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium transition cursor-pointer ${
                    gridCols === '2' 
                      ? 'bg-[#B79A6B] text-[#3A080B] shadow-sm font-semibold' 
                      : 'text-[#CDBFAE] hover:text-[#F3E9DC]'
                  }`}
                  title="2-column editorial grid"
                  aria-pressed={gridCols === '2'}
                >
                  <Columns2 className="w-3.5 h-3.5" />
                  <span>2 Cols</span>
                </button>
              </div>
            </div>

          </div>
        </FadeUp>

        {/* 1. AI product advertising */}
        <section id="ai-product-advertising" className="py-14 md:py-18">
          <FadeUp className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F3E9DC] tracking-wide">AI product advertising</h2>
              <div className="w-16 h-[2px] bg-[#B79A6B] mt-4"></div>
            </div>
            {selectedFilter !== 'All' && (
              <span className="text-xs text-[#D4BC8F] tracking-wider uppercase bg-[#3A080B]/70 px-3 py-1 rounded-full border border-[#B79A6B]/30 self-start md:self-auto">
                Filter: {selectedFilter}
              </span>
            )}
          </FadeUp>

          {(() => {
            const items = PORTFOLIO_ITEMS.filter(item => item.category === 'AI product advertising' && (selectedFilter === 'All' || item.subCategory === selectedFilter));
            if (items.length === 0) {
              return (
                <div className="p-8 text-center bg-[#4A0F13]/40 rounded-2xl border border-[#B79A6B]/20">
                  <p className="text-xs md:text-sm text-[#CDBFAE] tracking-wider uppercase font-light">
                    No {selectedFilter} samples in this section.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('All')}
                    className="mt-3 text-xs text-[#B79A6B] hover:text-[#D4BC8F] underline tracking-widest uppercase cursor-pointer"
                  >
                    View all samples
                  </button>
                </div>
              );
            }
            return (
              <div className={gridClass}>
                {items.map((item, index) => (
                  <ArtworkCard 
                    key={item.id} 
                    item={item} 
                    onOpen={openLightboxById} 
                    index={index} 
                  />
                ))}
              </div>
            );
          })()}
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* 2. Imaginative campaign concepts > AI UGC */}
        <section id="imaginative-campaign-concepts" className="py-14 md:py-18">
          <FadeUp className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F3E9DC] tracking-wide">Imaginative campaign concepts</h2>
              <h3 className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#B79A6B] font-medium mt-3">AI UGC</h3>
              <div className="w-16 h-[2px] bg-[#B79A6B] mt-4"></div>
            </div>
            {selectedFilter !== 'All' && (
              <span className="text-xs text-[#D4BC8F] tracking-wider uppercase bg-[#3A080B]/70 px-3 py-1 rounded-full border border-[#B79A6B]/30 self-start md:self-auto">
                Filter: {selectedFilter}
              </span>
            )}
          </FadeUp>

          {(() => {
            const items = PORTFOLIO_ITEMS.filter(item => item.category === 'AI UGC' && (selectedFilter === 'All' || item.subCategory === selectedFilter));
            if (items.length === 0) {
              return (
                <div className="p-8 text-center bg-[#4A0F13]/40 rounded-2xl border border-[#B79A6B]/20">
                  <p className="text-xs md:text-sm text-[#CDBFAE] tracking-wider uppercase font-light">
                    No {selectedFilter} samples in this section.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('All')}
                    className="mt-3 text-xs text-[#B79A6B] hover:text-[#D4BC8F] underline tracking-widest uppercase cursor-pointer"
                  >
                    View all samples
                  </button>
                </div>
              );
            }
            return (
              <div className={gridClass}>
                {items.map((item, index) => (
                  <ArtworkCard 
                    key={item.id} 
                    item={item} 
                    onOpen={openLightboxById} 
                    index={index} 
                  />
                ))}
              </div>
            );
          })()}
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* 3. AI-assisted graphic design */}
        <section id="ai-assisted-graphic-design" className="py-14 md:py-18">
          <FadeUp className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F3E9DC] tracking-wide">AI-assisted graphic design</h2>
              <div className="w-16 h-[2px] bg-[#B79A6B] mt-4"></div>
            </div>
            {selectedFilter !== 'All' && (
              <span className="text-xs text-[#D4BC8F] tracking-wider uppercase bg-[#3A080B]/70 px-3 py-1 rounded-full border border-[#B79A6B]/30 self-start md:self-auto">
                Filter: {selectedFilter}
              </span>
            )}
          </FadeUp>

          {(() => {
            const items = PORTFOLIO_ITEMS.filter(item => item.category === 'AI-assisted graphic design' && (selectedFilter === 'All' || item.subCategory === selectedFilter));
            if (items.length === 0) {
              return (
                <div className="p-8 text-center bg-[#4A0F13]/40 rounded-2xl border border-[#B79A6B]/20">
                  <p className="text-xs md:text-sm text-[#CDBFAE] tracking-wider uppercase font-light">
                    No {selectedFilter} samples in this section.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('All')}
                    className="mt-3 text-xs text-[#B79A6B] hover:text-[#D4BC8F] underline tracking-widest uppercase cursor-pointer"
                  >
                    View all samples
                  </button>
                </div>
              );
            }
            return (
              <div className={gridClass}>
                {items.map((item, index) => (
                  <ArtworkCard 
                    key={item.id} 
                    item={item} 
                    onOpen={openLightboxById} 
                    index={index} 
                  />
                ))}
              </div>
            );
          })()}
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* 4. AI-Powered E-commerce Visuals */}
        <section id="ai-powered-ecommerce" className="py-14 md:py-18">
          <FadeUp className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F3E9DC] tracking-wide">AI-Powered E-commerce Visuals</h2>
              <div className="w-16 h-[2px] bg-[#B79A6B] mt-4"></div>
            </div>
            {selectedFilter !== 'All' && (
              <span className="text-xs text-[#D4BC8F] tracking-wider uppercase bg-[#3A080B]/70 px-3 py-1 rounded-full border border-[#B79A6B]/30 self-start md:self-auto">
                Filter: {selectedFilter}
              </span>
            )}
          </FadeUp>

          {(() => {
            const items = PORTFOLIO_ITEMS.filter(item => item.category === 'AI-Powered E-commerce Visuals' && (selectedFilter === 'All' || item.subCategory === selectedFilter));
            if (items.length === 0) {
              return (
                <div className="p-8 text-center bg-[#4A0F13]/40 rounded-2xl border border-[#B79A6B]/20">
                  <p className="text-xs md:text-sm text-[#CDBFAE] tracking-wider uppercase font-light">
                    No {selectedFilter} samples in this section.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('All')}
                    className="mt-3 text-xs text-[#B79A6B] hover:text-[#D4BC8F] underline tracking-widest uppercase cursor-pointer"
                  >
                    View all samples
                  </button>
                </div>
              );
            }
            return (
              <div className={gridClass}>
                {items.map((item, index) => (
                  <ArtworkCard 
                    key={item.id} 
                    item={item} 
                    onOpen={openLightboxById} 
                    index={index} 
                  />
                ))}
              </div>
            );
          })()}
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* Disclaimer Note */}
        <section className="py-8 md:py-12">
          <FadeUp>
            <div className="p-6 md:p-8 rounded-xl border border-[#B79A6B]/40 bg-[#4A0F13]/60 text-center max-w-3xl mx-auto shadow-md">
              <p className="font-serif italic text-[#F3E9DC] text-sm md:text-base tracking-wide leading-relaxed">
                The brand visuals shown in this portfolio are independent creative samples.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* EDITORIAL DIVIDER */}
        <EditorialDivider />

        {/* CONTACT / CLOSING SECTION */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            
            <FadeUp>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3E9DC] tracking-tight mb-8">
                Excited to work together!
              </h2>

              <div className="space-y-6 text-[#CDBFAE] text-base md:text-lg leading-relaxed font-light mb-12 text-left md:text-center px-4">
                <p>
                  My work is approximately 95% remote because it is AI-based. It requires a strong, stable Wi-Fi connection and does not require office attendance, except in occasional cases around 5%.
                </p>
                <p>
                  Feel free to contact me if you are looking for a creative mind who knows how to transform ideas into professional visuals that fit each brand's identity and If you're currently building your business, you're in the right place, we can build its visual identity together.
                </p>
                <p className="text-[#D4BC8F] font-normal italic pt-2">
                  Let's schedule a consultation to discuss your specific design needs and project timeline.
                </p>
              </div>
            </FadeUp>

            {/* 4 Clickable Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 text-left">
              
              {/* Email Card */}
              <FadeUp delay={0.05}>
                <a 
                  href="mailto:farahaldelbani@icloud.com"
                  className="p-6 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 hover:border-[#B79A6B] hover:bg-[#5A171B] transition duration-300 group flex flex-col justify-between shadow-lg h-full"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B79A6B]/50 flex items-center justify-center text-[#B79A6B] mb-5 group-hover:scale-110 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#B79A6B] block mb-1 font-medium">
                      Email
                    </span>
                    <span className="text-xs text-[#F3E9DC] font-mono break-all">
                      farahaldelbani@icloud.com
                    </span>
                  </div>
                </a>
              </FadeUp>

              {/* WhatsApp Card */}
              <FadeUp delay={0.1}>
                <a 
                  href="https://wa.me/96170378080" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 hover:border-[#B79A6B] hover:bg-[#5A171B] transition duration-300 group flex flex-col justify-between shadow-lg h-full"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B79A6B]/50 flex items-center justify-center text-[#B79A6B] mb-5 group-hover:scale-110 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#B79A6B] block mb-1 font-medium">
                      WhatsApp number:
                    </span>
                    <span className="text-xs text-[#F3E9DC] font-mono">
                      (+961 70 37 80 80)
                    </span>
                  </div>
                </a>
              </FadeUp>

              {/* Instagram Card */}
              <FadeUp delay={0.15}>
                <a 
                  href="https://www.instagram.com/farah_aldelbani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 hover:border-[#B79A6B] hover:bg-[#5A171B] transition duration-300 group flex flex-col justify-between shadow-lg h-full"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B79A6B]/50 flex items-center justify-center text-[#B79A6B] mb-5 group-hover:scale-110 transition">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#B79A6B] block mb-1 font-medium">
                      Instagram
                    </span>
                    <span className="text-xs text-[#F3E9DC] break-all">
                      @farah_aldelbani
                    </span>
                  </div>
                </a>
              </FadeUp>

              {/* LinkedIn Card */}
              <FadeUp delay={0.2}>
                <a 
                  href="https://www.linkedin.com/in/farah-el-delbani-6ba52a434" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#4A0F13] border border-[#B79A6B]/30 hover:border-[#B79A6B] hover:bg-[#5A171B] transition duration-300 group flex flex-col justify-between shadow-lg h-full"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B79A6B]/50 flex items-center justify-center text-[#B79A6B] mb-5 group-hover:scale-110 transition">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#B79A6B] block mb-1 font-medium">
                      LinkedIn
                    </span>
                    <span className="text-xs text-[#F3E9DC] truncate block">
                      Farah El Delbani
                    </span>
                  </div>
                </a>
              </FadeUp>

            </div>

            {/* Strict Policy Note */}
            <FadeUp delay={0.25}>
              <div className="pt-8 border-t border-[#B79A6B]/30">
                <p className="font-serif text-xs md:text-sm tracking-[0.18em] text-[#D4BC8F] uppercase font-medium">
                  NOTE: I DON'T WORK WITH FASHION OR JEWELRY BRANDS.
                </p>
              </div>
            </FadeUp>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 bg-[#250406] text-center border-t border-[#B79A6B]/15 text-xs text-[#CDBFAE]/70 tracking-widest uppercase">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-sm tracking-widest text-[#F3E9DC]">FARAH EL DELBANI</span>
          <span className="text-[11px] tracking-[0.2em] text-[#B79A6B]/90 font-medium">AI Visual Content Creator</span>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between mb-3 text-xs uppercase tracking-widest text-[#CDBFAE] gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#B79A6B] font-medium">
                  {lightboxIndex + 1} / {PORTFOLIO_ITEMS.length} &bull; {PORTFOLIO_ITEMS[lightboxIndex].category}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded border border-[#B79A6B]/30 bg-[#3A080B] text-[10px] text-[#D4BC8F]">
                  {PORTFOLIO_ITEMS[lightboxIndex].subCategory}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Zoom Controls */}
                <div className="flex items-center gap-1.5 bg-[#4A0F13] px-3 py-1.5 rounded-full border border-[#B79A6B]/30 shadow-md">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1 rounded text-[#F3E9DC] hover:text-[#B79A6B] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                    title="Zoom Out (-)"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="px-2 py-0.5 text-[11px] font-mono text-[#D4BC8F] hover:text-[#F3E9DC] transition cursor-pointer font-medium"
                    title="Reset Zoom (0)"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>

                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1 rounded text-[#F3E9DC] hover:text-[#B79A6B] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                    title="Zoom In (+)"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  {zoomLevel > 1 && (
                    <button
                      type="button"
                      onClick={handleResetZoom}
                      className="p-1 ml-1 text-[#D4BC8F] hover:text-[#F3E9DC] transition cursor-pointer"
                      title="Reset to 100%"
                      aria-label="Reset zoom"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Close Button */}
                <button 
                  type="button"
                  onClick={() => { setLightboxIndex(null); setZoomLevel(1); }}
                  className="text-[#F3E9DC] hover:text-[#B79A6B] transition p-1.5 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#B79A6B] rounded cursor-pointer"
                  aria-label="Close image viewer"
                >
                  <span className="hidden sm:inline">Close</span>
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Artwork Container with Navigation arrows */}
            <div className="relative w-full flex items-center justify-center">
              {/* Previous Button */}
              <button 
                type="button"
                onClick={prevLightboxItem}
                className="absolute left-2 md:-left-12 z-20 w-11 h-11 rounded-full bg-[#3A080B]/80 hover:bg-[#B79A6B] text-[#F3E9DC] hover:text-[#3A080B] border border-[#B79A6B]/50 flex items-center justify-center transition shadow-lg focus:outline-none cursor-pointer"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Artwork Image Container with Pan / Zoom */}
              <div 
                className={`rounded-xl border border-[#B79A6B]/40 shadow-2xl max-h-[75vh] w-full flex items-center justify-center bg-[#250406] overflow-hidden ${
                  zoomLevel > 1 ? 'overflow-auto cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onWheel={(e) => {
                  if (e.deltaY < 0) {
                    setZoomLevel(prev => Math.min(Number((prev + 0.25).toFixed(2)), 3));
                  } else {
                    setZoomLevel(prev => Math.max(Number((prev - 0.25).toFixed(2)), 1));
                  }
                }}
              >
                <img 
                  src={PORTFOLIO_ITEMS[lightboxIndex].image} 
                  alt={PORTFOLIO_ITEMS[lightboxIndex].title}
                  onClick={handleToggleZoom}
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 250ms cubic-bezier(0.2, 0, 0, 1)'
                  }}
                  className="max-h-[75vh] w-auto max-w-full object-contain select-none block"
                  draggable={false}
                />
              </div>

              {/* Next Button */}
              <button 
                type="button"
                onClick={nextLightboxItem}
                className="absolute right-2 md:-right-12 z-20 w-11 h-11 rounded-full bg-[#3A080B]/80 hover:bg-[#B79A6B] text-[#F3E9DC] hover:text-[#3A080B] border border-[#B79A6B]/50 flex items-center justify-center transition shadow-lg focus:outline-none cursor-pointer"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption bar underneath */}
            <div className="mt-4 text-center flex flex-col items-center gap-1">
              <h4 className="font-serif text-lg md:text-xl text-[#F3E9DC] tracking-[0.15em] uppercase font-medium">
                {PORTFOLIO_ITEMS[lightboxIndex].title}
              </h4>
              <p className="text-[11px] text-[#CDBFAE]/70 uppercase tracking-widest">
                Click image or use controls to Zoom In/Out &bull; Scroll to Zoom &bull; Esc to close
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
