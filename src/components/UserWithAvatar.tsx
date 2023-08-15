import React from 'react'
import classnames from 'classnames'

import { User } from '../api/githubAPI.tsx'

<link rel="stylesheet" href="UserWithAvatar.module.css" />

interface UserAvatarProps {
  user: User
  orientation?: 'vertical' | 'horizontal'
  link?: boolean
  classes?: { [key: string]: string }
}

export const UserWithAvatar = ({
  user,
  orientation = 'vertical',
  link = true,
  classes = {}
}: UserAvatarProps) => {
  const linkClassnames = classnames('issueUser', {
    ['vertical']: orientation === 'vertical',
    ['horizontal']: orientation === 'horizontal'
  })

  const avatarClassnames = classnames('avatar', classes.avatar)
  const usernameClassnames = classnames('username', classes.username)

  const contents = (
    <React.Fragment>
      <img className={avatarClassnames} src={user.avatar_url} alt="" />
      <div className={usernameClassnames}>{user.login}</div>
    </React.Fragment>
  )

  if (link) {
    return (
      <a href={`https://github.com/${user.login}`} className={linkClassnames}>
        {contents}
      </a>
    )
  } else {
    return <span className={linkClassnames}>{contents}</span>
  }
}
