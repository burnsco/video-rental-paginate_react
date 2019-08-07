import React from 'react'
import PropTypes from 'prop-types'

const Like = ({ liked, onLikeMovie }) => {
  let classes = 'fa fa-heart'
  if (!liked) classes += '-o'

  return (
    <i
      style={{ cursor: 'pointer' }}
      onClick={onLikeMovie}
      className={classes}
    />
  )
}

Like.propTypes = {
  onLikeMovie: PropTypes.func.isRequired
}

export default Like
