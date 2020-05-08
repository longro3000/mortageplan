import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import PlanReducer from './plan/reducers'

const rootReducer = combineReducers({
  plan: PlanReducer,
})

const init: RootState = {
  plan: {
    plan: {},
    bulkCreate: ''  
  }
}


export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  let initialState
  initialState = init
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  )

  return store
} 