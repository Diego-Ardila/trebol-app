import React, {useContext, useCallback} from 'react';
import './StepButtons.scss';
import { useGlobalState } from '../../utils/GlobalContext';
import StepsObject from '../../utils/Steps.json';

type StepButtonsProps = {
  handleClick?: () => void
}

function StepButtons(props: StepButtonsProps) {
  const { dispatch, state: {stepId} } = useGlobalState();
  const isFirst = stepId === 1;
  const isLast = StepsObject.length === stepId;
  
  return (
    <div className="step-buttons">
      {!isFirst ? (
        <button
          className="prev-btn"
          style={{borderRight: isLast ? 'none' : '1px solid gray'}}
          onClick={() => dispatch({type: 'DECREMENT_STEP_ID'})}
        >
          Anterior
        </button>
      ): null}
      {!isLast ? (
      <button type="submit" className="next-btn" onClick={props.handleClick}>
        Siguiente
      </button>
      ) : null}
    </div>
  );
}

export default StepButtons;
