import React from 'react';
import StepButtons from '../components/global/StepButtons';
import { useGlobalState } from '../utils/GlobalContext';
import './Review.scss';
import CustomTable from '../components/Review/CustomTable';

function Review() {
  const { state: { enterprise }, dispatch } = useGlobalState();

  return (
    <div className="review">
      <h2>Revisión de información</h2>
      <div className="review-enterprise-info">
        <span>
          <strong>Nombre:</strong>&nbsp;
          {enterprise.enterpriseName}
        </span>
        <span>
          <strong>Nit:</strong>&nbsp;
          {enterprise.id}
        </span>
        <span>
          <strong>Email:</strong>&nbsp;
          {enterprise.email}
        </span>
      </div>
      <div className="review-files">
        <CustomTable rows={enterprise.templateInputs}/>
      </div>
      <StepButtons />
    </div>
  );
}

export default Review;
