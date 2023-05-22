import React, { useEffect, useState } from 'react'
import Page from './Page'
import "@/style/pages/Projects.scss"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

type Project = {
  name: string
  logo_file: string
  description_file: string
}

const projects: Array<Project> = [
  {
    name: "Blockware",
    logo_file: "/projects/blockware/logo.png",
    description_file: "/projects/blockware/blockware.md"
  },
  {
    name: "RobPress and RobBank",
    logo_file: "/projects/rob/logo.png",
    description_file: "/projects/rob/robpress-bank.md"
  },
  {
    name: "Untitled Chore App",
    logo_file: "/projects/uca/logo.png",
    description_file: "/projects/uca/uca.md"
  }
]


const Projects = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [mdContent, setMdContent] = useState<string | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  async function loadMarkdownFile(path: string) {
    const response = await fetch(path);
    const text = await response.text();
    setMdContent(text)
  }

  useEffect(() => {
    if (!searchParams.has("project")) return;

    const project = searchParams.get("project")?.replaceAll("+", " ").toLowerCase();
    const foundProject = projects.find((p) => p.name.toLowerCase() === project);
    if (foundProject) setActiveProject(foundProject);
  }, [searchParams])

  useEffect(() => {
    if (!activeProject) return;

    setSidebarOpen(false)
    navigate(`?project=${activeProject.name.replaceAll(" ", "+")}`, { replace: true })
    loadMarkdownFile(activeProject.description_file)
  }, [activeProject, navigate])



  return (
    <Page className="projects">
      <header>
        <Link to="/">Tom Smith</Link>
        <img onClick={() => setSidebarOpen(!sidebarOpen)} src="/svg/icons/burger.svg" className={`${sidebarOpen && "open"}`} alt="" />
        <h2>🛠️ My Projects</h2>
      </header>

      <div className="project-table">
        <ul className={`${sidebarOpen && "open"}`}>
          {projects.map((p, i) => (
            <li key={i} onClick={() => setActiveProject(p)}> <img src={`${p.logo_file}`} alt="" /> {p.name}</li>
          ))}
        </ul>

        <div className='content'>
          {
            activeProject && mdContent
              ? <ReactMarkdown children={mdContent} />
              : <></>
          }
        </div>
      </div>

      <div className={`overlay ${sidebarOpen && "show"}`} onClick={() => setSidebarOpen(false)}></div>

    </Page>
  )
}


export default Projects