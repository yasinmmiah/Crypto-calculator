import React from 'react';
import { motion } from 'framer-motion';
import { BanknotesIcon, ChartBarSquareIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg py-1.5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-1">
            <div className="p-0.5 bg-white/10 rounded">
              <BanknotesIcon className="w-2.5 h-2.5 md:w-2 md:h-2" />
            </div>
            <div>
              <h1 className="text-base md:text-sm font-bold">UK Crypto Tax Calculator</h1>
              <p className="text-xs md:text-[10px] text-primary-100">Accurate tax calculations for your crypto gains</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <ChartBarSquareIcon className="w-2 h-2 md:w-1.5 md:h-1.5" />
              <span className="text-xs md:text-[10px]">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-0.5">
              <CalendarDaysIcon className="w-2 h-2 md:w-1.5 md:h-1.5" />
              <span className="text-xs md:text-[10px] font-medium">Tax Year 2025/26</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;