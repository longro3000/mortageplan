import axios from 'axios'
import { Dispatch } from 'redux'

import {
  FETCH_PLANS,
  CREATE_PLAN_SUCCESS,
  BULK_CREATE_SUCCESS,
  MortagePlanActions,
  MortagePlan
} from './types'

const api = axios.create({
  baseURL: 'http://localhost:9090/api/v1'
})

export const fetchPlans = () => async (dispatch: Dispatch<MortagePlanActions>) => {
  try { 
    const response = await api.get('/findall')
    if ( response.data === []) {
      bulkCreate()
    }
    dispatch({
      type: FETCH_PLANS,
      payload: response.data
    })
  }
  catch (error) {
    console.log(error)
  }
}

export const createPlan = (form: MortagePlan) => async (dispatch: Dispatch<MortagePlanActions>) => {
  try { 
    const response = await api.post('/create', form)
    dispatch({
      type: CREATE_PLAN_SUCCESS,
      payload: response.data
    })
  }
  catch (error) {
    console.log(error)
  }
}

export const bulkCreate = () => async (dispatch: Dispatch<MortagePlanActions>) => {
  try { 
    const response = await api.get('/bulkcreate')
    dispatch({
      type: BULK_CREATE_SUCCESS,
      payload: response.data
    })
  }
  catch (error) {
    console.log(error)
  }
}