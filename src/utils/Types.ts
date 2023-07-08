import { SetStateAction, Dispatch } from 'react';

export type StepStatus = "active" | "passed" | "pending"

export type EnterpriseType = {
  name: string,
  id: number | string,
  email: string,
  template: FileTemplate[]
}

export type FileTemplate = {
  id: number,
  name: string,
  accept: string,
  file?: File
}

export type Step = {
  id: number,
  name: string,
  description: string,
  status: StepStatus
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