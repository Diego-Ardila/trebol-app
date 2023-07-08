import { SetStateAction, Dispatch } from 'react';

export type StepStatus = "active" | "passed" | "pending"

export type Step = {
  id: number,
  name: string,
  description: string,
  status: StepStatus
}

export type GlobalContextType = {
  stepId: number,
  setStepId: Dispatch<SetStateAction<number>>
}

export type EnterpriseProps = {
  isNew: boolean
}

export type EnterpriseInfoType = {
  name: string,
  id: number | string,
  email: string
}

export type ExistentEnterpriseInfoType = {
  id: number | string
}