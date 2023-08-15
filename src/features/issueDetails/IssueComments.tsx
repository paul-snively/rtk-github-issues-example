import React from 'react'
import ReactMarkdown from 'react-markdown'

import { insertMentionLinks } from '../../utils/stringUtils.ts'
import { Issue, Comment } from '../../api/githubAPI.tsx'
import { UserWithAvatar } from '../../components/UserWithAvatar.tsx'

<link rel="stylesheet" href="IssueComments.module.css" />

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
    return <div className="issue-detail--no-comments">No comments</div>
  }

  // The issue has comments, but they're not loaded yet
  if (!comments || comments.length === 0) {
    return (
      <div className="issue-detail--comments-loading">Comments loading...</div>
    )
  }

  // Comments are loaded
  return (
    <ul className='commentsList'>
      {comments.map(comment => (
        <li key={comment.id}>
          <IssueComment comment={comment} />
        </li>
      ))}
    </ul>
  )
}
