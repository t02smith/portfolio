import { createHashRouter } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound"
import Projects from "@/pages/Projects";
import About from "./pages/About";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/blog",
    element: <BlogHome />
  },
  {
    path: "/blog/:postId",
    element: <BlogPost />
  },
  {
    path: "*",
    element: < NotFound />
  }
], {
  
})

export default router;