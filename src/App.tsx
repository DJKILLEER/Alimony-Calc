import React, { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator';
import { Celebration } from './components/Celebration';
import { Message } from './components/Message';

function App() {
  const [step, setStep] = useState<'calculator' | 'celebration' | 'message'>('calculator');
  const [alimonyAmount, setAlimonyAmount] = useState<number>(0);
  const [displayAmount, setDisplayAmount] = useState<number>(0);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    income: '',
    marriageYears: '',
    employmentStatus: 'employed',
    divorceReason: '',
    propertyOwnership: 'none',
    children: '',
    monthlyExpenses: '',
  });

  useEffect(() => {
    if (step === 'celebration' && !animationComplete) {
      const duration = 2000;
      const steps = 60;
      const increment = alimonyAmount / steps;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setDisplayAmount(prev => {
          const next = prev + increment;
          if (next >= alimonyAmount) {
            setAnimationComplete(true);
            clearInterval(timer);
            return alimonyAmount;
          }
          return next;
        });
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [step, alimonyAmount, animationComplete]);

  useEffect(() => {
    if (animationComplete) {
      const transitionTimer = setTimeout(() => {
        setStep('message');
      }, 6000);

      return () => clearTimeout(transitionTimer);
    }
  }, [animationComplete]);

  const calculateAlimony = (e: React.FormEvent) => {
    e.preventDefault();
    const income = parseFloat(formData.income);
    const years = parseFloat(formData.marriageYears);
    const children = parseInt(formData.children) || 0;
    const monthlyExpenses = parseFloat(formData.monthlyExpenses) || 0;
    
    // Base calculation
    let amount = income * 0.3;
    
    // Marriage duration factor
    amount *= Math.min(years / 10, 1);
    
    // Employment status adjustment
    if (formData.employmentStatus === 'unemployed') {
      amount *= 1.2;
    }
    
    // Children adjustment (5% increase per child up to 3 children)
    const childrenAdjustment = Math.min(children, 3) * 0.05;
    amount *= (1 + childrenAdjustment);
    
    // Monthly expenses consideration (up to 10% additional based on expenses ratio to income)
    const expensesRatio = (monthlyExpenses * 12) / income;
    const expensesAdjustment = Math.min(expensesRatio, 0.1);
    amount *= (1 + expensesAdjustment);
    
    setAlimonyAmount(Math.round(amount));
    setDisplayAmount(0);
    setAnimationComplete(false);
    setStep('celebration');
  };

  const resetCalculator = () => {
    setStep('calculator');
    setFormData({
      income: '',
      marriageYears: '',
      employmentStatus: 'employed',
      divorceReason: '',
      propertyOwnership: 'none',
      children: '',
      monthlyExpenses: '',
    });
  };

  if (step === 'celebration') {
    return <Celebration displayAmount={displayAmount} />;
  }

  if (step === 'message') {
    return <Message onReset={resetCalculator} />;
  }

  return (
    <Calculator
      formData={formData}
      setFormData={setFormData}
      onSubmit={calculateAlimony}
    />
  );
}

export default App;
