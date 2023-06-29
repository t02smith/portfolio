import React, { ReactNode, useState, useEffect } from 'react'
import "@/style/components/NavBar.scss"
import { Link } from 'react-router-dom'
import PageSelectDropdown from './PageSelectDropdown'

type NavbarProps = {
  currentPageId: string;
  children?: ReactNode;
  closeMenu?: number;
}

const Navbar = ({ currentPageId, children, closeMenu }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false)
    }
  }, [closeMenu])

  return (
    <>
      <nav>
        {children
          && <img onClick={() => setMenuOpen(!menuOpen)} src="/svg/icons/burger.svg" className={`burger ${menuOpen && "open"}`} alt="" />
        }

        <Link to="/" className={`${children && "has-burger-menu"}`}>Tom Smith</Link>

        <PageSelectDropdown currentPageId={currentPageId} />
      </nav>

      <div className={`children-wrapper ${menuOpen && "open"}`}>
        {children}
      </div>

      <div className={`overlay ${menuOpen && "show"}`} onClick={() => setMenuOpen(false)}></div>

    </>
  )
}

export default Navbar