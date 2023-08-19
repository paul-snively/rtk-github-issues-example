import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useAsset from 'ultra/hooks/use-asset.js'

import { RootState } from './rootReducer.ts'

import { RepoSearchForm } from '../features/repoSearch/RepoSearchForm.tsx'
import { IssuesListPage } from '../features/issuesList/IssuesListPage.tsx'
import { IssueDetailsPage } from '../features/issueDetails/IssueDetailsPage.tsx'

import {
  displayRepo,
  setCurrentDisplayType,
  setCurrentPage
} from '../features/issuesDisplay/issuesDisplaySlice.ts'

type CurrentDisplay =
  | {
      type: 'issues'
    }
  | {
      type: 'comments'
      issueId: number
    }

const App: React.FC = () => {
  const dispatch = useDispatch()

  const { org, repo, displayType, page, issueId } = useSelector(
    (state: RootState) => state.issuesDisplay
  )

  const setOrgAndRepo = (org: string, repo: string) => {
    dispatch(displayRepo({ org, repo }))
  }

  const setJumpToPage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const showIssuesList = () => {
    dispatch(setCurrentDisplayType({ displayType: 'issues' }))
  }

  const showIssueComments = (issueId: number) => {
    dispatch(setCurrentDisplayType({ displayType: 'comments', issueId }))
  }

  let content

  if (displayType === 'issues') {
    content = (
      <React.Fragment>
        <RepoSearchForm
          org={org}
          repo={repo}
          setOrgAndRepo={setOrgAndRepo}
          setJumpToPage={setJumpToPage}
        />
        <IssuesListPage
          org={org}
          repo={repo}
          page={page}
          setJumpToPage={setJumpToPage}
          showIssueComments={showIssueComments}
        />
      </React.Fragment>
    )
  } else if (issueId !== null) {
    const key = `${org}/${repo}/${issueId}`
    content = (
      <IssueDetailsPage
        key={key}
        org={org}
        repo={repo}
        issueId={issueId}
        showIssuesList={showIssuesList}
      />
    )
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href={useAsset("/index.css")} />
        <link rel="stylesheet" href={useAsset("/App.css")} />
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div className='root'>
          <div className='App'>
            {content}
          </div>
        </div>
      </body>
    </html>
  )
}

export default App
