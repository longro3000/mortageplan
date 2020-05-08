import React from 'react'

import InputForm from 'components/InputForm'
import Table from 'components/Table'

const App = () => {
  return (
    <div className="ui container">
      <InputForm />
      <Table />
    </div>
  )
}

App.DisplayName = 'App'
export default App
