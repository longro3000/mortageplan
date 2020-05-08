import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import InputField from '../InputField'
import { MortagePlan } from 'store/plan/types'
import { createPlan } from 'store/plan/actions'
import { RootState } from 'store'

const InputForm = () => {
  const [customerName, setCustomerName] = useState('')
  const [totalLoan, setTotalLoan] = useState('')
  const [yearInterest, setYearInterest] = useState('')
  const [yearDuration, setYearDuration] = useState('')
  const plan = useSelector((state: RootState) => {
    return state.plan.plan
  })
  const dispatch = useDispatch()

  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    const form: MortagePlan = {
      customerName: customerName,
      totalLoan: +totalLoan,
      yearInterest: +yearInterest,
      yearDuration: +yearDuration
    }
    dispatch(createPlan(form))
    event.preventDefault()
  }

  return (
    <div>
      <form className="ui form" onSubmit={onSubmitHandle}>
        <InputField
          label="Customer Name"
          value={customerName}
          onValueChange={setCustomerName} 
        />
        <InputField
          label="Total Loan"
          value={totalLoan}
          onValueChange={setTotalLoan} 
        />
        <InputField
          label="Annual Interest (Unit: %)"
          value={yearInterest}
          placeHolder="Ex: 5 (equal 5% = 0.05)"
          onValueChange={setYearInterest} 
        />
        <InputField
          label="Loan duration (Unit: Year)"
          value={yearDuration}
          onValueChange={setYearDuration} 
        />
        <button type='submit'>Submit</button>
      </form>
      <h4>
        Monthly Payment:
      </h4>
      <p>{plan.monthlyPaymentToString}</p>
    </div>
  )
}

InputForm.displayName = 'InputForm'

export default InputForm