import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold text-gray-900">ApnaLawyer AI</span>
            </div>
            <p className="mt-4 text-gray-500">
              Making legal services accessible, affordable, and efficient through AI technology.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © 2025 LegalMind AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;