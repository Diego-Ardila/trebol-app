import * as React from 'react'
import { EnterpriseType, GlobalAlertType } from './Types'

export const defaultEnterprise = {
  id: 0,
  name: '',
  email: '',
  templates: [
    {
      id: 0,
      name: '',
      accept: ''
    }
  ]
}

type Action = { type: 'INCREMENT_STEP_ID' } |
{ type: 'DECREMENT_STEP_ID' } |
{ type: 'SET_ENTERPRISE', payload: EnterpriseType } |
{ type: 'SET_GLOBAL_ALERT', payload: GlobalAlertType}
type Dispatch = (action: Action) => void
type State = { stepId: number, enterprise: EnterpriseType, globalAlert: GlobalAlertType }
type CountProviderProps = { children: React.ReactNode }

const GlobalStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT_STEP_ID': {
      return {
        ...state,
        stepId: state.stepId + 1
      }
    }
    case 'DECREMENT_STEP_ID': {
      return {
        ...state,
        stepId: state.stepId - 1
      }
    }
    case 'SET_ENTERPRISE': {
      return {
        ...state,
        enterprise: action.payload
      }
    }
    case 'SET_GLOBAL_ALERT': {
      return {
        ...state,
        globalAlert: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function GlobalStateProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(globalReducer, {
    stepId: 1,
    enterprise: defaultEnterprise,
    globalAlert: {isOpen: false, message: ''}
  })
  const value = { state, dispatch }

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  )
}

function useGlobalState() {
  const context = React.useContext(GlobalStateContext)
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider')
  }
  return context
}

export { GlobalStateProvider, useGlobalState }