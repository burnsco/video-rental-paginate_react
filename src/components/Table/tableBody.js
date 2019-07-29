import React from 'react'
import _ from 'lodash'

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    // if column data has a function that returns buttons/etc
    if (column.content) return column.content(item)
    // else return regular columns
    return _.get(item, column.path)
  }

  return (
    <tbody>
      {data.map(item => (
        <tr key={item._id}>
          {columns.map(column => (
            <td key={item._id + (column.path || column.key)}>
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
