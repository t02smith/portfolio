import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "@/style/components/PageSelectDropdown.scss"

type PageSelect = {
  id: string;
  text: string;
  link: string;
  logo_link: string;
}

const pages: Array<PageSelect> = [
  {
    id: "about-me",
    text: "About Me",
    link: "/about",
    logo_link: "/svg/icons/about.svg"
  },
  {
    id: "projects",
    text: "Projects",
    link: "/projects",
    logo_link: "/svg/icons/books.svg"
  },
  {
    id: "blog",
    text: "Blog",
    link: "/blog",
    logo_link: "/svg/icons/megaphone.svg"
  }
]

type PageSelectDropdownProps = {
  currentPageId: string;
}

const PageSelectDropdown = ({ currentPageId }: PageSelectDropdownProps) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const current = pages.find(p => p.id === currentPageId);
  if (!current) return <></>

  return (
    <div className='page-select-wrapper'>
      <div className="page-select">

        <div className="current" onClick={() => setOptionsOpen(!optionsOpen)}>
          <div className="item">
            <img src={current.logo_link} alt="" />
            <strong>{current.text}</strong>
          </div>
          <div className="toggle" >
            <div className={`triangle ${optionsOpen && "active"}`}></div>
          </div>
        </div>

      </div>
      <div className={`options ${optionsOpen && "active"}`}>
        {
          pages.filter((p) => p.id !== currentPageId).map((p, i) =>
            <Link to={p.link} key={i} className='item'>
              <img src={p.logo_link} alt="" />
              <strong>{p.text}</strong>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default PageSelectDropdown