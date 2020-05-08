import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import { RootState } from 'store'
import { fetchPlans, bulkCreate } from 'store/plan/actions'

const Table = () => {
  const headers: string[] = ['Customer Name', 'Total Loan', 'Year Duration', 'Annual Interest', 'Monthly Payment']
  const plans = useSelector((state: RootState) => {
    return state.plan.plans
  })
  const newPlan = useSelector((state: RootState) => {
    return state.plan.plan
  })
  const bulkCreateStatus = useSelector((state: RootState) => {
    return state.plan.bulkCreate
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (plans?.length === 0) {
      dispatch(bulkCreate())
    }
  },[dispatch, plans])

  useEffect(() => {
    dispatch(fetchPlans())
  }, [bulkCreateStatus])
  
  useEffect(() => {
    dispatch(fetchPlans())
  },[dispatch, newPlan])


  const renderTableRow = () => {
    return plans?.map(plan => {
      return (
        <tr key={plan.id}>
          <TableRow 
            plan={plan}
          />
        </tr>
      )
    }
    )
  }
  return (
    <div>
      <h1>Other Plans:</h1>
      <table className="ui celled fixed table">
        <thead>
          <TableHeader
            headers={headers}
          />
        </thead>
        <tbody>{ plans && renderTableRow()}</tbody>
      </table> 
    </div>
  )
}

Table.displayName = 'Table'

export default Table