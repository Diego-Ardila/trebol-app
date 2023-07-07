import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Step, StepStatus } from '../../utils/Types';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GlobalContext } from '../../utils/GlobalContext';
import './Stepper.scss';

function Stepper() {
  const { stepId } = useContext(GlobalContext);

  const steps: () => Step[] = useCallback(() => {
    const stepsTemplate: Step[] = [
      {
        id: 1,
        name: "Datos empresa",
        description: "Formulario de datos basicos de la empresa",
        status: "pending"
      },
      {
        id: 2,
        name: "Documentos",
        description: "Carga de documentos",
        status: "pending"
      },
      {
        id: 3,
        name: "Representantes",
        description: "Comprobación de documentos",
        status: "pending"
      }
    ];
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
