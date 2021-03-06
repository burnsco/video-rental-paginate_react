import React from 'react'
import TableHeader from '../components/Table/tableHeader.jsx'
import TableBody from '../components/Table/tableBody.jsx'

const Table = ({
  columns,
  onSort,
  sortColumn,
  data,
  onDeleteMovie,
  onLikeMovie
}) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody
        data={data}
        columns={columns}
        onDeleteMovie={onDeleteMovie}
        onLikeMovie={onLikeMovie}
      />
    </table>
  )
}

export default Table
