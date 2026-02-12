"use client"
import React from "react";
import { motion } from "motion/react";
import { Logo } from "../components/Logo";
import {
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo size="md" />

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              
              <a
                href="#"
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Settings
              </a>
              <Link href='/auth' className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">
                Signup
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4"
          >
            
            <a
              href="#"
              className="text-lg font-semibold flex justify-center items-center py-3.5 bg-indigo-100 rounded-xl text-slate-600 px-2"
            >
              Settings
            </a>
            <Link href='/auth' className="bg-indigo-600 text-white w-full py-4 flex justify-center items-center rounded-xl font-bold">
              Signup
            </Link>
          </motion.div>
        )}
      </nav>
    )
}

export default Navbar