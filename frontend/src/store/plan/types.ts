//THIS FILE CONTAINS INTERFACES FOR API REQUEST RESPONSE AND ACTION CREATOR
export const FETCH_PLANS = 'FETCH_PLANS'
export const CREATE_PLAN_SUCCESS = 'CREATE_PLAN_SUCCESS'
export const BULK_CREATE_SUCCESS = 'BULK_CREATE_SUCCESS'

export interface MortagePlan {
    id?: number,
    customerName: string,
    totalLoan: number,
    yearInterest: number,
    yearDuration: number,
    monthlyPayment?: number,
    monthlyPaymentToString?: string
}

export interface PlanState {
    plans?: MortagePlan[],
    plan: Partial<MortagePlan>,
    bulkCreate: string
}

export interface FetchPlansAction {
    type: typeof FETCH_PLANS,
    payload: MortagePlan[]
}

export interface CreatePlanSuccessAction {
    type: typeof CREATE_PLAN_SUCCESS,
    payload: MortagePlan
}

export interface BulkCreateAction {
    type: typeof BULK_CREATE_SUCCESS,
    payload: string
}

export type MortagePlanActions = FetchPlansAction | CreatePlanSuccessAction | BulkCreateAction



