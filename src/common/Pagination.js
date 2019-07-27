import React from 'react'
import _ from 'lodash'

const Pagination = ({
  itemsTotal,
  itemsPerPage,
  onPageChange,
  currentPage
}) => {
  const pagesTotal = Math.ceil(itemsTotal / itemsPerPage)

  if (pagesTotal === 1) return null

  const pages = _.range(1, pagesTotal + 1)

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
