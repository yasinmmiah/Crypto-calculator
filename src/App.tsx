import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FormStepper from './components/FormStepper';
import HoldingsForm from './components/forms/HoldingsForm';
import { useFormStore } from './store/useFormStore';

const App: React.FC = () => {
  const { currentStep } = useFormStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <FormStepper />
        {currentStep === 'holdings' && <HoldingsForm />}
      </main>
      <Footer />
    </div>
  );
};

export default App;