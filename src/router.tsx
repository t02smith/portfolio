import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound"
import Projects from "@/pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "*",
    element: < NotFound />
  }
])

export default router;