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
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-white/10 rounded-lg">
              <BanknotesIcon className="w-3.5 h-3.5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">UK Crypto Tax Calculator</h1>
              <p className="text-sm text-primary-100">Accurate tax calculations for your crypto gains</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <ChartBarSquareIcon className="w-3 h-3" />
              <span className="text-xs">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="w-3 h-3" />
              <span className="text-xs font-medium">Tax Year 2025/26</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;