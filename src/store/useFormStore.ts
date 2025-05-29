import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { FormStep, FormData, CryptoHolding, TaxPosition, TransactionDetails } from '../types';

interface FormStore {
  currentStep: FormStep;
  formData: FormData;
  setStep: (step: FormStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  addHolding: () => void;
  updateHolding: (id: string, updates: Partial<CryptoHolding>) => void;
  removeHolding: (id: string) => void;
  updateTaxPosition: (updates: Partial<TaxPosition>) => void;
  updateTransactionDetails: (updates: Partial<TransactionDetails>) => void;
}

const STEPS: FormStep[] = ['holdings', 'taxPosition', 'transactionDetails', 'results'];

const initialFormData: FormData = {
  holdings: [
    {
      id: uuidv4(),
      name: '',
      purchaseAmount: 0,
      purchaseDate: '',
      pricePerUnit: 0,
      currentUnits: 0,
      currentValue: 0,
      exchange: ''
    }
  ],
  taxPosition: {
    taxableIncome: 0,
    capitalGainsRealized: 0,
    unusedAllowance: 3000,
    previousDisposals: false
  },
  transactionDetails: {
    saleAmount: 'full',
    withdrawalMethod: '',
    timing: 'immediate'
  }
};

export const useFormStore = create<FormStore>((set) => ({
  currentStep: 'holdings',
  formData: initialFormData,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => set((state) => {
    const currentIndex = STEPS.indexOf(state.currentStep);
    const nextIndex = currentIndex + 1;
    return {
      currentStep: nextIndex < STEPS.length ? STEPS[nextIndex] : state.currentStep
    };
  }),

  prevStep: () => set((state) => {
    const currentIndex = STEPS.indexOf(state.currentStep);
    const prevIndex = currentIndex - 1;
    return {
      currentStep: prevIndex >= 0 ? STEPS[prevIndex] : state.currentStep
    };
  }),

  addHolding: () => set((state) => ({
    formData: {
      ...state.formData,
      holdings: [
        ...state.formData.holdings,
        {
          id: uuidv4(),
          name: '',
          purchaseAmount: 0,
          purchaseDate: '',
          pricePerUnit: 0,
          currentUnits: 0,
          currentValue: 0,
          exchange: ''
        }
      ]
    }
  })),

  updateHolding: (id, updates) => set((state) => ({
    formData: {
      ...state.formData,
      holdings: state.formData.holdings.map((holding) =>
        holding.id === id ? { ...holding, ...updates } : holding
      )
    }
  })),

  removeHolding: (id) => set((state) => ({
    formData: {
      ...state.formData,
      holdings: state.formData.holdings.filter((holding) => holding.id !== id)
    }
  })),

  updateTaxPosition: (updates) => set((state) => ({
    formData: {
      ...state.formData,
      taxPosition: {
        ...state.formData.taxPosition,
        ...updates
      }
    }
  })),

  updateTransactionDetails: (updates) => set((state) => ({
    formData: {
      ...state.formData,
      transactionDetails: {
        ...state.formData.transactionDetails,
        ...updates
      }
    }
  }))
}));