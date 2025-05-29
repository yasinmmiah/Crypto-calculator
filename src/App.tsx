import React from 'react';
import { useFormStore } from './store/useFormStore';
import Header from './components/Header';
import Footer from './components/Footer';
import FormStepper from './components/FormStepper';
import HoldingsForm from './components/forms/HoldingsForm';
import TaxPositionForm from './components/forms/TaxPositionForm';

function App() {
  const currentStep = useFormStore(state => state.currentStep);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <FormStepper />
        
        <div className="mt-8">
          {currentStep === 'holdings' && <HoldingsForm />}
          {currentStep === 'taxPosition' && <TaxPositionForm />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;