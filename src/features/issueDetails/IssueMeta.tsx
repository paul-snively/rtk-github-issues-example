import React from 'react'
import classnames from 'classnames'

import useAsset from 'ultra/hooks/use-asset.js'
import { Helmet } from 'react-helmet-async'

import { Issue } from '../../api/githubAPI.tsx'
import { UserWithAvatar } from '../../components/UserWithAvatar.tsx'


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
      <Helmet>
        <link rel="stylesheet" href={useAsset("/IssueMeta.module.css")} />
      </Helmet>
      <IssueNumber issue={issue} />
      <IssueState issue={issue} />
      <UserWithAvatar user={issue.user} orientation="horizontal" />
    </div>
  )
}
