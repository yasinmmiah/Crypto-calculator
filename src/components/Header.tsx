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
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="p-0.5 bg-white/10 rounded">
              <BanknotesIcon className="w-1.5 h-1.5" />
            </div>
            <div>
              <h1 className="text-base font-bold">UK Crypto Tax Calculator</h1>
              <p className="text-[8px] text-primary-100">Accurate tax calculations for your crypto gains</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              <ChartBarSquareIcon className="w-1 h-1" />
              <span className="text-[8px]">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-0.5 ml-1">
              <CalendarDaysIcon className="w-1 h-1" />
              <span className="text-[8px] font-medium">Tax Year 2025/26</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;