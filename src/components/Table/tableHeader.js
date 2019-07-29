import React, { Component } from 'react'

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn }
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }
    this.props.onSort(sortColumn)
  }
  render() {
    const { raiseSort } = this
    const { columns } = this.props
    return (
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.path || col.key} onClick={() => raiseSort(col.path)}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
