import React, {useEffect, useState} from 'react';
import Enterprise from './Enterprise';
import Documents from './Documents';
import { useGlobalState } from '../utils/GlobalContext';
import CustomAlert from '../components/global/CustomAlert';
import { getClient } from '../api/Client/ClientApi';
import { useNavigate, useParams } from 'react-router-dom';
import Review from './Review';

function Main() {
  let { clientId } = useParams();
  const navigate = useNavigate();

  const { state: { stepId } } = useGlobalState(); 

  useEffect(() => {
    const getClientWrapper = async () => {      
      try {
        if(clientId) {
          await getClient(clientId);
        }
      } catch (error) {
        navigate('/')
        console.error(error);
      }
    }
    getClientWrapper();
  }, [])

  const componentMapper = () => {
    switch (stepId) {
      case 1:
        return <Enterprise />
      case 2: 
        return <Documents />
      case 3: 
        return <Review />
      default:
        return null;
    }
  }
  
  return (
    <main className='main-view'>
      <CustomAlert />
      {componentMapper()}
    </main>
  );
}

export default Main;
