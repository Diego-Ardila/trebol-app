import { SetStateAction, Dispatch } from 'react';

export type StepStatus = "active" | "passed" | "pending"

export type ClientType = {
  id: number | string,
  clientName: string,
  template: TemplateType
}

export type TemplateType = {
  id: number | string,
  templateName: string,
  inputs: TemplateInput[],
}

export type EnterpriseType = {
  name: string,
  id: number | string,
  email: string,
  templateInputs: TemplateInput[]
}

export type GlobalAlertType = {
  isOpen: boolean,
  message: string
}

export type TemplateInput = {
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