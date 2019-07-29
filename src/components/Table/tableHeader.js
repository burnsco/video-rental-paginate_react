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
  renderSortIcon = column => {
    const { sortColumn } = this.props
    if (column.path !== sortColumn.path) return null
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />
  }

  render() {
    const { raiseSort, renderSortIcon } = this
    const { columns } = this.props
    return (
      <thead>
        <tr>
          {columns.map(col => (
            <th
              className="clickable"
              key={col.path || col.key}
              onClick={() => raiseSort(col.path)}
            >
              {col.label} {renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
