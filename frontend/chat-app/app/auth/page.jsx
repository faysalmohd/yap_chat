"use client";

import React from "react";
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";


const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      {/* Social Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Join the Yap
        </h1>
        <p className="mt-3 text-slate-500 text-lg leading-relaxed">
          Start your journey with the loudest chat community on the internet today.
        </p>
      </motion.div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">
          Full Name
        </label>
        <div className="relative group">
          <input
            type="text"
            placeholder="Yap Master"
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent rounded-xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Mail size={18} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">
          Email Address
        </label>
        <div className="relative group">
          <input
            type="email"
            placeholder="you@yap.chat"
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent rounded-xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Mail size={18} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Password</label>

        <div className="relative group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-transparent rounded-xl outline-hidden focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all font-medium"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Lock size={18} />
          </div>

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98] mt-4">
        Create Account
      </button>

      <p className="text-center text-slate-500 font-medium">
        Already a yapper{"? "}
        <Link href='/auth/login' className="text-indigo-600 font-black hover:underline underline-offset-4">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default Signup;
