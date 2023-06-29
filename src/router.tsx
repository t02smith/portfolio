import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound"
import Projects from "@/pages/Projects";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: < NotFound />
  }
], {
  
})

export default router;