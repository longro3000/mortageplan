import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies

interface TableHeaderProps {
    headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProps) => {
  function renderHeader() {
    return headers.map(header => (
      <th key={header}>
        {header}
      </th>
    ))
  }

  return <tr>{renderHeader()}</tr>
}

TableHeader.displayName = 'TableHeader'

export default TableHeader