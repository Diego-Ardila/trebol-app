import { SetStateAction, Dispatch } from 'react';

export type StepStatus = "active" | "passed" | "pending"

export type EnterpriseType = {
  name: string,
  id: number | string,
  email: string,
  templates: Template[]
}

export type Template = {
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

export type EnterpriseInfoType = {
  name: string,
  id: number | string,
  email: string
}

export type ExistentEnterpriseInfoType = {
  id: number | string
}