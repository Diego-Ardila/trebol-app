import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Step, StepStatus } from '../../utils/Types';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useGlobalState } from '../../utils/GlobalContext';
import StepsObject from '../../utils/Steps.json';
import './Stepper.scss';

function Stepper() {
  const { state: {stepId} } = useGlobalState();

  const steps: () => Step[] = useCallback(() => {
    const stepsTemplate = StepsObject as Step[];
    let isActiveFound: boolean = false;

    return stepsTemplate.map((step: Step) => {
      if (isActiveFound) {
        return step;
      } else if (step.id === stepId) {
        isActiveFound = true;
        return { ...step, status: 'active' }
      }
      return { ...step, status: 'passed' }
    })
  }, [stepId]);

  const iconMapper: (status: StepStatus, id: number) => JSX.Element = (status, id) => {
    switch (status) {
      case "active":
        return <div className='step-icon step-icon--active'>{id}</div>;
      case "passed":
        return <BsFillCheckCircleFill className='step-icon step-icon--passed' />;
      case "pending":
        return <div className='step-icon step-icon--pending'>{id}</div>;
      default:
        return <BsFillCheckCircleFill />;
    }
  };

  return (
    <div className="stepper">
      {steps().map(step => (
        <div key={step.id} className="step-container">
          <div className="step-info">
            <h5>{step.name}</h5>
            <span>{step.description}</span>
          </div>
          {iconMapper(step.status, step.id)}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
