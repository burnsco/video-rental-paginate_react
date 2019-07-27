import React from 'react'

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

export default Like
