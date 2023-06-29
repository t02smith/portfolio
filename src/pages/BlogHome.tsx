import React from 'react'
import Page from './Page'
import "@/style/pages/BlogHome.scss"
import Navbar from '@/components/Navbar'

const BlogHome = () => {
  return (
    <Page className='blog-home'>

      <Navbar currentPageId='blog' />

      <div className="page-content">
        <strong>coming soon...</strong>

      </div>
    </Page>
  )
}

export default BlogHome