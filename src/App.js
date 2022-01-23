import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { LoadSpinner } from "./components/LoadSpinner";

const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  return (
    <div className="bg-background-900 min-h-screen min-w-screen font-Poppins tracking-wider">
      <Navbar />
      <div className="max-w-4xl m-auto px-5 bg-background-900">
        <Suspense fallback={<LoadSpinner />}>
          <Home />
          <Skills />
          <Projects />
        </Suspense>
        <div className="h-96" />
      </div>
    </div>
  );
}

export default App;
