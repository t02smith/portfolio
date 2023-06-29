import React from 'react'
import TomSmith from '@/components/TomSmith'
import Page from './Page'
import "@/style/pages/HomePage.scss"
import { motion } from 'framer-motion'
import QuickLink, { QuickLinkParams } from '@/components/QuickLinks'

const quickLinks: Array<QuickLinkParams> = [
  {
    name: "About Me",
    link: "/about",
    icon_link: "/svg/icons/about.svg"
  },
  {
    name: "My Projects",
    link: "/projects",
    icon_link: "/svg/icons/books.svg"
  },
  {
    name: "Blog",
    link: "/blog",
    icon_link: "/svg/icons/megaphone.svg"
  }
]

const Home = () => {
  return (
    <Page className='home-page'>
      <div className="title-wrapper">
        <TomSmith />
      </div>

      <motion.div className='quick-links' initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 1 }}>
        {quickLinks.map((ql, i) => (<motion.div key={i} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.25 + (0.25 * i), duration: 1 }}>
          <QuickLink key={i} {...ql} />
        </motion.div>))}
      </motion.div>
    </Page>
  )
}



export default Home