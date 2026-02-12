"use client"

import React from 'react';
import { motion } from 'motion/react';
import { Logo } from '../../components/Logo';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left side: Form */}
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12 relative overflow-hidden">
        {/* Background blobs for mobile/tablet */}
        <div className="lg:hidden absolute top-0 left-0 -z-10 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <Logo size="md" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          © 2026 Yap Chat Inc. All yaps reserved.
        </div>
      </div>

      {/* Right side: Visual/Marketing */}
      <div className="hidden lg:block relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply z-10" />


        <div className="relative z-20 h-full flex flex-col items-center justify-center p-20 text-center">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20 shadow-2xl max-w-lg"
          >
            <Logo size="xl" showText={false} />

            <h2 className="mt-10 text-4xl font-black text-white leading-tight">
              "The best conversations happen when you just yap."
            </h2>

            <p className="mt-6 text-indigo-100 text-xl font-medium">
              Join 5M+ yappers worldwide.
            </p>

            <div className="mt-12 flex justify-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white/30 bg-white/20 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="user"
                  />
                </div>
              ))}

              <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                +5M
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated particles/shapes */}
        <div className="absolute top-0 right-0 p-10">
          <div className="w-20 h-20 border-4 border-white/10 rounded-full animate-ping" />
        </div>

        <div className="absolute bottom-0 left-0 p-10">
          <div className="w-32 h-32 border-4 border-indigo-400/20 rounded-3xl rotate-45 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout