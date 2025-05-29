import React from 'react';
import { motion } from 'framer-motion';
import { BanknotesIcon, ChartBarSquareIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <BanknotesIcon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">UK Crypto Tax Calculator</h1>
              <p className="text-primary-100">Accurate tax calculations for your crypto gains</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ChartBarSquareIcon className="w-5 h-5" />
              <span className="text-sm">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Tax Year 2025/26</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};