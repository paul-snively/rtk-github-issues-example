import React from 'react'
import ReactMarkdown from 'react-markdown'

import useAsset from 'ultra/hooks/use-asset.js'
import { Helmet } from 'react-helmet-async'

import { insertMentionLinks } from '../../utils/stringUtils.ts'
import { Issue, Comment } from '../../api/githubAPI.tsx'
import { UserWithAvatar } from '../../components/UserWithAvatar.tsx'

interface ICLProps {
  issue: Issue
  comments: Comment[]
}

interface ICProps {
  comment: Comment
}

function IssueComment({ comment }: ICProps) {
  return (
    <div className='comment'>
      <Helmet>
        <link rel="stylesheet" href="IssueComments.module.css" />
      </Helmet>
      <UserWithAvatar
        user={comment.user}
        classes={{ avatar: 'avatar', username: 'username' }}
        orientation="horizontal"
      />

      <div className='body'>
        <ReactMarkdown
          className="markdown"
          source={insertMentionLinks(comment.body)}
        />
      </div>
    </div>
  )
}

export function IssueComments({ comments = [], issue }: ICLProps) {
  // The issue has no comments
  if (issue.comments === 0) {
    return <div className="issue-detail--no-comments">
      <Helmet>
        <link rel="stylesheet" href="IssueComments.module.css" />
      </Helmet>
      No comments
    </div>
  }

  // The issue has comments, but they're not loaded yet
  if (!comments || comments.length === 0) {
    return (
      <div className="issue-detail--comments-loading">
        <Helmet>
          <link rel="stylesheet" href={useAsset("/IssueComments.module.css")} />
        </Helmet>
        Comments loading...
      </div>
    )
  }

  // Comments are loaded
  return (
    <ul className='commentsList'>
      <Helmet>
        <link rel="stylesheet" href="IssueComments.module.css" />
      </Helmet>
      {comments.map(comment => (
        <li key={comment.id}>
          <IssueComment comment={comment} />
        </li>
      ))}
    </ul>
  )
}
