import React from 'react'
import classnames from 'classnames'

import { Issue } from '../../api/githubAPI.tsx'
import { UserWithAvatar } from '../../components/UserWithAvatar.tsx'

<link rel="stylesheet" href="IssueMeta.module.css" />

interface IssueProps {
  issue: Issue
}

const IssueState = ({ issue: { state } }: IssueProps) => (
  <span
    className={classnames('issue-detail__state', 'issueState', {
      ['open']: state === 'open'
    })}
  >
    {state}
  </span>
)

const IssueNumber = ({ issue }: IssueProps) => (
  <span className={classnames('issue-detail__number', 'number')}>
    #{issue.number}
  </span>
)

export const IssueMeta = ({ issue }: IssueProps) => {
  return (
    <div className={classnames('issue-detail__meta', 'meta')}>
      <IssueNumber issue={issue} />
      <IssueState issue={issue} />
      <UserWithAvatar user={issue.user} orientation="horizontal" />
    </div>
  )
}
