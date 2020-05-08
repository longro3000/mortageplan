/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

interface InputFieldProps {
    label: string,
    value: string | number,
    placeHolder?: string
    onValueChange: (value: any) => void
}

const InputField = ({label, value, onValueChange, placeHolder}: InputFieldProps) => {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="ui input">
        <input
          value={value}
          placeholder={placeHolder}
          onChange={event => onValueChange(event.target.value)}
        />
      </div>
    </div>
  )
}

InputField.DisplayName = 'InputField'
export default InputField