import React from 'react'

import { Issue } from '../../api/githubAPI.tsx'
import { IssueListItem } from './IssueListItem.tsx'

<link rel="stylesheet" href="IssuesList.module.css" />

interface Props {
  issues: Issue[]
  showIssueComments: (issueId: number) => void
}

export const IssuesList = ({ issues, showIssueComments }: Props) => {
  const renderedIssues = issues.map(issue => (
    <li key={issue.id}>
      <IssueListItem {...issue} showIssueComments={showIssueComments} />
    </li>
  ))

  return <ul className='issuesList'>{renderedIssues}</ul>
}
