import _ from 'lodash'

export function Paginate(items, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage

  return _(items)
    .slice(startIndex)
    .take(itemsPerPage)
    .value()
}
