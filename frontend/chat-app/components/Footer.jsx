"use client"

import React from "react";
import { Logo } from "./Logo";
const Footer = () => {
  return (
    <footer className="py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <Logo size="md" />
            <p className="mt-6 text-slate-500 max-w-xs leading-relaxed">
              Making the world a louder place, one chat at a time. The ultimate
              platform for endless yapping.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900">Product</h4>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Features
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Integrations
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Enterprise
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900">Company</h4>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                About
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Careers
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900">Legal</h4>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Privacy
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Terms
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-600">
                Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2026 Yap Chat Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
