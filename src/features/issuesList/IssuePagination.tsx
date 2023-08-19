import React from 'react'
import classnames from 'classnames'
import Paginate, { ReactPaginateProps } from 'react-paginate'

import useAsset from 'ultra/hooks/use-asset.js'
import { Helmet } from 'react-helmet-async'

export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

interface Props {
  currentPage: number
  pageCount: number
  onPageChange?: OnPageChangeCallback
}

export const IssuePagination = ({
  currentPage,
  pageCount,
  onPageChange
}: Props) => {
  return (
    <div className={classnames('issuesPagination', 'pagination')}>
      <Helmet>
        <link rel="stylesheet" href={useAsset("/IssuePagination.module.css")} />
      </Helmet>
      <Paginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </div>
  )
}
