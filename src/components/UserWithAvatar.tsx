import React from 'react'
import classnames from 'classnames'
import { Helmet } from 'react-helmet-async';

import { User } from '../api/githubAPI.tsx'
import useAsset from 'ultra/hooks/use-asset.js';

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
      <Helmet>
        <link rel="stylesheet" href={useAsset("/UserWithAvatar.module.css")} />
      </Helmet>
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
