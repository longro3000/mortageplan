import React from 'react'
import { MortagePlan } from 'store/plan/types'

interface TableRowProps {
    plan: MortagePlan
}
const TableRow = ({ plan }: TableRowProps) => {
  return (
    <>
      <td>
        {plan.customerName}
      </td>
      <td>
        {plan.totalLoan}
      </td>
      <td>
        {plan.yearDuration}
      </td>
      <td>
        {plan.yearInterest}
      </td>
      <td>
        {plan.monthlyPaymentToString}
      </td>
    </>
  )
}

TableRow.displayName = 'TableRow'

export default TableRow