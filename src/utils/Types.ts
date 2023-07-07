export type StepStatus = "active" | "passed" | "pending"

export type Step = {
  id: number,
  name: string,
  description: string,
  status: StepStatus
}

export type GlobalContextType = {
  stepId: number,
  setStepId: (x: number) => void
}