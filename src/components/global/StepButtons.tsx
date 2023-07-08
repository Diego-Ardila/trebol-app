import React, {useContext, useCallback} from 'react';
import './StepButtons.scss';
import { useGlobalState } from '../../utils/GlobalContext';
import StepsObject from '../../utils/Steps.json';

function StepButtons() {
  const { dispatch, state: {stepId} } = useGlobalState();
  
  return (
    <div className="step-buttons">
      {stepId > 1 ? (
        <button className="prev-btn" onClick={() => dispatch({type: 'DECREMENT_STEP_ID'})}>
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
