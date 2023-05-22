import React from 'react'
import Page from '@/pages/Page'
import "@/style/pages/NotFound.scss"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Page className='not-found'>
      <h1>404</h1>
      <h2>😔 Ooops This page doesn't exist!</h2>
      <div>
        <p>Somehow you've ended up somewhere you shouldn't have! </p>
        <Link to="/">Click here to return to the home page</Link>

      </div>
    </Page>
  )
}

export default NotFound