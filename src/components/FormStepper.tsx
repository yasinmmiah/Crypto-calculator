import React from 'react';
import { motion } from 'framer-motion';
import { useFormStore } from '../store/useFormStore';
import type { FormStep } from '../types';

const steps: { id: FormStep; label: string }[] = [
  { id: 'holdings', label: 'Crypto Holdings' },
  { id: 'taxPosition', label: 'Tax Position' },
  { id: 'transactionDetails', label: 'Transaction Details' },
  { id: 'results', label: 'Results' },
];

const FormStepper: React.FC = () => {
  const { currentStep, setStep } = useFormStore();
  
  return (
    <div className="w-full my-12">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isPast = steps.findIndex(s => s.id === currentStep) > index;
          
          return (
            <React.Fragment key={step.id}>
              {/* Step circle */}
              <motion.button
                onClick={() => isPast && setStep(step.id)}
                className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full text-xl font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary-500 text-white' 
                    : isPast 
                      ? 'bg-primary-100 text-primary-500 cursor-pointer' 
                      : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                }`}
                whileHover={isPast ? { scale: 1.1 } : {}}
                whileTap={isPast ? { scale: 0.95 } : {}}
                disabled={!isPast && !isActive}
              >
                {isPast ? '✓' : index + 1}
                
                {/* Step label */}
                <span className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-lg font-medium ${
                  isActive ? 'text-primary-500' : isPast ? 'text-neutral-700' : 'text-neutral-500'
                }`}>
                  {step.label}
                </span>
              </motion.button>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-4 relative">
                  <div className="absolute inset-0 bg-neutral-200"></div>
                  <motion.div 
                    className="absolute inset-0 bg-primary-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: isPast ? 1 : 0 
                    }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FormStepper;