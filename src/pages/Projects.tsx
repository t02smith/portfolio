import React, { useEffect, useState } from 'react'
import Page from './Page'
import "@/style/pages/Projects.scss"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Navbar from '@/components/Navbar'

type Project = {
  name: string
  logo_file: string
  description_file: string
}

const projects: Array<Project> = [
  {
    name: "Blockware",
    logo_file: "/projects/blockware/logo.png",
    description_file: "/projects/blockware/description.md"
  },
  {
    name: "RobPress and RobBank",
    logo_file: "/projects/rob/logo.png",
    description_file: "/projects/rob/description.md"
  },
  {
    name: "Untitled Chore App",
    logo_file: "/projects/uca/logo.png",
    description_file: "/projects/uca/description.md"
  },
  {
    name: "This Website",
    logo_file: "/logo.png",
    description_file: "/projects/this_website/description.md"
  },
  {
    name: "WoL-Kit",
    logo_file: "/projects/wolkit/wolkit.png",
    description_file: "/projects/wolkit/description.md"
  }
]


const Projects = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [mdContent, setMdContent] = useState<string | null>(null);

  const [closeMenu, setCloseMenu] = useState<number>(0);

  async function loadMarkdownFile(path: string) {
    const response = await fetch(path);
    const text = await response.text();
    setMdContent(text)
  }

  useEffect(() => {
    if (!searchParams.has("project")) setActiveProject(projects[0]);

    const project = searchParams.get("project")?.replaceAll("+", " ").toLowerCase();
    const foundProject = projects.find((p) => p.name.toLowerCase() === project);
    if (foundProject) setActiveProject(foundProject);
  }, [searchParams])

  useEffect(() => {
    if (!activeProject) return;

    setCloseMenu(closeMenu+1)
    navigate(`?project=${activeProject.name.replaceAll(" ", "+")}`, { replace: true })
    loadMarkdownFile(activeProject.description_file)
  }, [activeProject, navigate])

  return (
    <Page className="projects">

      <Navbar currentPageId='projects' closeMenu={closeMenu}>
        <ul className="nav-menu">
          {projects.map((p, i) => (
            <li key={i} onClick={() => setActiveProject(p)}> <img src={`${p.logo_file}`} alt="" /> {p.name}</li>
          ))}
        </ul>
      </Navbar>

      <div className="project-table page-content">
        <ul>
          {projects.map((p, i) => (
            <li key={i} onClick={() => setActiveProject(p)}> <img src={`${p.logo_file}`} alt="" /> {p.name}</li>
          ))}
        </ul>

        <div className='content'>
          {
            activeProject && mdContent
              ? <ReactMarkdown children={mdContent} />
              : <h2 className='loading'>
                Loading content...
              </h2>
          }
        </div>
      </div>
    </Page>
  )
}


export default Projects