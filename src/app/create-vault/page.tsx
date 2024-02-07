'use client';
import React, { useState } from 'react';
import CreateVaultHeader from '../../components/VaultHeader';
import Stepper from '../../components/Stepper';
import Step1 from '../../components/Step1';
import VaultFooter from '../../components/VaultFooter';
import Step3 from '../../components/Step3';
import Step4 from '../../components/Step4';
import Step2 from '../../components/Step2';

const CreateVault = () => {
  const [steps, setStep] = useState(1);
  const handleStep = () => {
    if (steps == 4) {
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };
  return (
    <div className="relative">
      <CreateVaultHeader />
      <Stepper step={steps} />
      {steps == 1 ? <Step1 /> : steps == 2 ? <Step2 /> : steps == 3 ? <Step3 /> : <Step4 />}
      <VaultFooter changeStep={handleStep} step={steps} />
    </div>
  );
};

export default CreateVault;
