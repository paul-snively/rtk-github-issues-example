import { combineReducers } from '@reduxjs/toolkit'

import issuesDisplayReducer from '../features/issuesDisplay/issuesDisplaySlice.ts'
import repoDetailsReducer from '../features/repoSearch/repoDetailsSlice.ts'
import issuesReducer from '../features/issuesList/issuesSlice.ts'
import commentsReducer from '../features/issueDetails/commentsSlice.ts'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailsReducer,
  issues: issuesReducer,
  comments: commentsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
