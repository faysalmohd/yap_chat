import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export const Logo = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { circle: 'w-8 h-8', text: 'text-xl', icon: 16 },
    md: { circle: 'w-12 h-12', text: 'text-2xl', icon: 24 },
    lg: { circle: 'w-16 h-16', text: 'text-4xl', icon: 32 },
    xl: { circle: 'w-24 h-24', text: 'text-6xl', icon: 48 },
  };

  const currentSize = sizes[size] || sizes.md; // fallback safety

  return (
    <Link href='/' className="flex items-center gap-3 select-none" >
      <motion.div
        whileHover={{ scale: 1.05, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className={`${currentSize.circle} bg-indigo-600 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg shadow-indigo-200`}
      >
        <svg
          width={currentSize.icon * 1.5}
          height={currentSize.icon * 1.5}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            d="M50 20V50M50 50L30 80M50 50L70 80"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="opacity-20"
          />

          <motion.path
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            d="M20 30C20 21.7157 26.7157 15 35 15H65C73.2843 15 80 21.7157 80 30V55C80 63.2843 73.2843 70 65 70H45L25 85V70C22.2386 70 20 67.7614 20 65V30Z"
            fill="currentColor"
          />

          <circle cx="40" cy="40" r="4" fill="#4F46E5" />
          <circle cx="60" cy="40" r="4" fill="#4F46E5" />

          <motion.path
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            d="M45 55C45 55 48 58 50 58C52 58 55 55 55 55"
            stroke="#4F46E5"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute top-1 right-1 flex gap-0.5">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 8, 4] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
              className="w-0.5 bg-white/40 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${currentSize.text} font-black tracking-tight text-slate-900`}>
            yap<span className="text-indigo-600">chat</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Never stop talking
          </span>
        </div>
      )}
    </Link>
  );
};
