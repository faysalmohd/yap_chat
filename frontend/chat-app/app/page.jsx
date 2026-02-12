"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Logo } from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MessageSquare,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Download,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-40 left-0 w-72 h-72 bg-indigo-300 rounded-full blur-[120px]" />
          <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-300 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="xl" showText={false} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-slate-900 max-w-3xl leading-[1.1]"
          >
            Chatting has never been this{" "}
            <span className="text-indigo-600">loud.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-slate-500 max-w-xl leading-relaxed"
          >
            Join the fastest growing community where every conversation is an
            explosion of personality. Express yourself like never before.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href='/auth/login' className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2 group">
              Start Yapping Now{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Why everyone's yapping
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Built for the next generation of digital communicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Hyper-Fast",
                desc: "Messages delivered faster than you can think. Literally zero lag.",
                color: "bg-amber-100 text-amber-600",
              },
              {
                icon: Shield,
                title: "Vault-Grade",
                desc: "Your yaps are your business. End-to-end encryption by default.",
                color: "bg-indigo-100 text-indigo-600",
              },
              {
                icon: Globe,
                title: "Truly Global",
                desc: "Connect with anyone, anywhere. Real-time translation included.",
                color: "bg-emerald-100 text-emerald-600",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div
                  className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Ready to join the
            <br />
            conversation?
          </h2>
          <p className="mt-6 text-indigo-100 text-xl max-w-xl mx-auto">
            It takes less than 30 seconds to set up your account and start
            yapping.
          </p>
          <button className="mt-10 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl active:scale-95">
            Create Free Account
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
