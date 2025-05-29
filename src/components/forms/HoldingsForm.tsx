import React from 'react';
import { motion } from 'framer-motion';
import { useFormStore } from '../../store/useFormStore';
import Tooltip from '../Tooltip';
import { formatCurrency } from '../../utils/formatters';
import { 
  QuestionMarkCircleIcon, 
  PlusIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const HoldingsForm: React.FC = () => {
  const { formData, addHolding, updateHolding, removeHolding, nextStep } = useFormStore();
  const { holdings } = formData;

  const handleUpdateHolding = (id: string, field: string, value: string | number) => {
    updateHolding(id, { [field]: value });
    
    if (field === 'purchaseAmount' || field === 'pricePerUnit') {
      const holding = holdings.find(h => h.id === id);
      if (holding) {
        const purchaseAmount = field === 'purchaseAmount' ? Number(value) : holding.purchaseAmount;
        const pricePerUnit = field === 'pricePerUnit' ? Number(value) : holding.pricePerUnit;
        
        if (purchaseAmount > 0 && pricePerUnit > 0) {
          const calculatedUnits = purchaseAmount / pricePerUnit;
          updateHolding(id, { currentUnits: calculatedUnits });
        }
      }
    }
  };

  const isValid = () => {
    return holdings.every(holding => (
      holding.name && 
      holding.purchaseAmount > 0 && 
      holding.purchaseDate && 
      holding.pricePerUnit > 0 && 
      holding.currentUnits > 0 && 
      holding.currentValue > 0 && 
      holding.exchange
    ));
  };

  return (
    <motion.div
      className="form-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold">Cryptocurrency Holdings</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Enter details about your cryptocurrency investments
          </p>
        </div>
        
        <div className="card-body">
          {holdings.map((holding, index) => (
            <div key={holding.id} className="mb-8 pb-8 border-b border-neutral-200 last:border-0 last:mb-0 last:pb-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Holding #{index + 1}</h3>
                {holdings.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeHolding(holding.id)}
                    className="text-error-500 hover:text-error-700 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`name-${holding.id}`} className="input-label">
                    Cryptocurrency Name
                  </label>
                  <input
                    type="text"
                    id={`name-${holding.id}`}
                    value={holding.name}
                    onChange={(e) => handleUpdateHolding(holding.id, 'name', e.target.value)}
                    placeholder="e.g. Bitcoin, Ethereum"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor={`exchange-${holding.id}`} className="input-label">
                    Exchange
                  </label>
                  <input
                    type="text"
                    id={`exchange-${holding.id}`}
                    value={holding.exchange}
                    onChange={(e) => handleUpdateHolding(holding.id, 'exchange', e.target.value)}
                    placeholder="e.g. Coinbase, Binance"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor={`purchaseAmount-${holding.id}`} className="input-label">
                    <span className="flex items-center">
                      Total Amount Invested (GBP)
                      <Tooltip text="The total amount in GBP that you initially invested to purchase this cryptocurrency">
                        <QuestionMarkCircleIcon className="w-2.5 h-2.5 ml-1 text-neutral-400" />
                      </Tooltip>
                    </span>
                  </label>
                  <input
                    type="number"
                    id={`purchaseAmount-${holding.id}`}
                    value={holding.purchaseAmount || ''}
                    onChange={(e) => handleUpdateHolding(holding.id, 'purchaseAmount', Number(e.target.value))}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor={`purchaseDate-${holding.id}`} className="input-label">
                    Purchase Date
                  </label>
                  <input
                    type="date"
                    id={`purchaseDate-${holding.id}`}
                    value={holding.purchaseDate}
                    onChange={(e) => handleUpdateHolding(holding.id, 'purchaseDate', e.target.value)}
                    className="form-input"
                    max={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor={`pricePerUnit-${holding.id}`} className="input-label">
                    <span className="flex items-center">
                      Price Per Unit at Purchase (GBP)
                      <Tooltip text="The price in GBP of a single unit of this cryptocurrency at the time of purchase">
                        <QuestionMarkCircleIcon className="w-2.5 h-2.5 ml-1 text-neutral-400" />
                      </Tooltip>
                    </span>
                  </label>
                  <input
                    type="number"
                    id={`pricePerUnit-${holding.id}`}
                    value={holding.pricePerUnit || ''}
                    onChange={(e) => handleUpdateHolding(holding.id, 'pricePerUnit', Number(e.target.value))}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor={`currentUnits-${holding.id}`} className="input-label">
                    <span className="flex items-center">
                      Current Units Held
                      <Tooltip text="The number of units of this cryptocurrency that you currently own">
                        <QuestionMarkCircleIcon className="w-2.5 h-2.5 ml-1 text-neutral-400" />
                      </Tooltip>
                    </span>
                  </label>
                  <input
                    type="number"
                    id={`currentUnits-${holding.id}`}
                    value={holding.currentUnits || ''}
                    onChange={(e) => handleUpdateHolding(holding.id, 'currentUnits', Number(e.target.value))}
                    placeholder="0.00"
                    min="0"
                    step="0.000001"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor={`currentValue-${holding.id}`} className="input-label">
                    <span className="flex items-center">
                      Current Market Value (GBP)
                      <Tooltip text="The total value in GBP of your holding at today's market price">
                        <QuestionMarkCircleIcon className="w-2.5 h-2.5 ml-1 text-neutral-400" />
                      </Tooltip>
                    </span>
                  </label>
                  <input
                    type="number"
                    id={`currentValue-${holding.id}`}
                    value={holding.currentValue || ''}
                    onChange={(e) => handleUpdateHolding(holding.id, 'currentValue', Number(e.target.value))}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              {holding.purchaseAmount > 0 && holding.currentValue > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Profit/Loss:</span>
                    <span className={`font-semibold ${
                      holding.currentValue > holding.purchaseAmount 
                        ? 'text-secondary-500' 
                        : holding.currentValue < holding.purchaseAmount 
                          ? 'text-error-500' 
                          : 'text-neutral-500'
                    }`}>
                      {formatCurrency(holding.currentValue - holding.purchaseAmount)}
                      {' '}
                      ({(((holding.currentValue - holding.purchaseAmount) / holding.purchaseAmount) * 100).toFixed(2)}%)
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="button"
              onClick={addHolding}
              className="btn-secondary"
            >
              <PlusIcon className="w-3 h-3 mr-1" />
              Add Another Cryptocurrency
            </button>
            
            <motion.button
              type="button"
              onClick={nextStep}
              className="btn-primary ml-auto"
              disabled={!isValid()}
              whileHover={{ scale: isValid() ? 1.02 : 1 }}
              whileTap={{ scale: isValid() ? 0.98 : 1 }}
            >
              Continue to Tax Position
              <ArrowRightIcon className="w-3 h-3 ml-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HoldingsForm;