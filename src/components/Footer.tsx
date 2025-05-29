import React from 'react';
import { InformationCircleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <InformationCircleIcon className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-300">
              This calculator provides an estimate only. Please consult a qualified tax professional for personalized advice.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <ShieldExclamationIcon className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-300">
              Rates and allowances mentioned are for the 2025/26 tax year and subject to change.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-800 text-center text-xs text-neutral-400">
          <p>Developed by Yasin Mohammed Miah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;