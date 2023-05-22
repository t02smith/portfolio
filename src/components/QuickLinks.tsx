import { Link } from "react-router-dom"

export type QuickLinkParams = {
  name: string
  link: string
  icon_link: string
}

const QuickLink = ({ name, link, icon_link }: QuickLinkParams) => {
  return (
    <Link to={`${link}`} className='quick-link'>
      <img src={`${icon_link}`} alt="" />
      <h2>{name}</h2>
    </Link>
  )
}

export default QuickLink