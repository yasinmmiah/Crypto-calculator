import React from 'react';
import { InformationCircleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <InformationCircleIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
            <p className="text-sm text-neutral-300">
              This calculator provides an estimate only. Please consult a qualified tax professional for personalized advice.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ShieldExclamationIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
            <p className="text-sm text-neutral-300">
              Rates and allowances mentioned are for the 2025/26 tax year and subject to change.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>Developed by Yasin Mohammed Miah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer