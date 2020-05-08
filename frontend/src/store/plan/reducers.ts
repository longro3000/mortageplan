import {
  FETCH_PLANS,
  CREATE_PLAN_SUCCESS,
  BULK_CREATE_SUCCESS,
  MortagePlanActions,
  PlanState
} from './types'

const initialState: PlanState = {
  plan: {},
  bulkCreate: ''
}

export default ( state: PlanState = initialState, action: MortagePlanActions) => {
  switch (action.type) {
    case FETCH_PLANS: 
      return {...state, plans: action.payload}
    case CREATE_PLAN_SUCCESS:
      return {...state, plan: action.payload}
    case BULK_CREATE_SUCCESS:
      return {...state, bulkCreate: action.payload}
    default:
      return state
  }
}