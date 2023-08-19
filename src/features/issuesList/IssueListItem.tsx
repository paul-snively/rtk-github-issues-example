import React, { MouseEvent } from 'react'

import useAsset from 'ultra/hooks/use-asset.js'
import { Helmet } from 'react-helmet-async'

import { Issue } from '../../api/githubAPI.tsx'
import { shorten } from '../../utils/stringUtils.ts'

import { IssueLabels } from '../../components/IssueLabels.tsx'
import { UserWithAvatar } from '../../components/UserWithAvatar.tsx'


type Props = Issue & {
  showIssueComments: (issueId: number) => void
}

export const IssueListItem = ({
  number,
  title,
  labels,
  user,
  comments,
  body = '',
  showIssueComments
}: Props) => {
  const onIssueClicked = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showIssueComments(number)
  }

  const pluralizedComments = comments === 1 ? 'comment' : 'comments'

  return (
    <div className='issue'>
      <Helmet>
        <link rel="stylesheet" href={useAsset("/IssueListItem.module.css")} />
      </Helmet>
      <UserWithAvatar user={user} />
      <div className="issue__body">
        <a href="#comments" onClick={onIssueClicked}>
          <span className='number'>#{number}</span>
          <span className='title'>{title}</span>
        </a>
        <br /> ({comments} {pluralizedComments})
        <p className="issue__summary">{body && shorten(body)}</p>
        <IssueLabels labels={labels} className='label' />
      </div>
    </div>
  )
}
