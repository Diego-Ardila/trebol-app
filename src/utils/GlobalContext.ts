import { createContext } from 'react';
import { GlobalContextType } from './Types';

export const GlobalContext = createContext<GlobalContextType>({
  stepId: 1,
  setStepId: () => {}
});