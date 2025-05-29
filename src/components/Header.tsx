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
      <div className="container mx-auto px-2 py-1">
        <div className="flex flex-col md:flex-row justify-between items-center gap-0.5">
          <div className="flex items-center gap-0.5">
            <div className="p-0.5 bg-white/10 rounded">
              <BanknotesIcon className="w-3 h-3" />
            </div>
            <div>
              <h1 className="text-sm font-bold">UK Crypto Tax Calculator</h1>
              <p className="text-[10px] text-primary-100">Accurate tax calculations for your crypto gains</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <ChartBarSquareIcon className="w-2.5 h-2.5" />
              <span className="text-[10px]">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-0.5">
              <CalendarDaysIcon className="w-2.5 h-2.5" />
              <span className="text-[10px] font-medium">Tax Year 2025/26</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;