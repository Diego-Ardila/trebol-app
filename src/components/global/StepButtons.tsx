import React, {useContext, useCallback} from 'react';
import './StepButtons.scss';
import { GlobalContext } from '../../utils/GlobalContext';
import StepsObject from '../../utils/Steps.json';

function StepButtons() {
  const { stepId, setStepId } = useContext(GlobalContext);
  
  return (
    <div className="step-buttons">
      {stepId > 1 ? (
        <button className="prev-btn" onClick={() => setStepId((prev: number) => prev - 1)}>
          Anterior
        </button>
      ): null}
      {StepsObject.length > stepId ? (
      <button type="submit" className="next-btn">
        Siguiente
      </button>
      ) : null}
    </div>
  );
}

export default StepButtons;
