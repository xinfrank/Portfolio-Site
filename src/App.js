import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LoadSpinner } from "./components/LoadSpinner";

const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  return (
    <div className="bg-background-900 min-h-screen min-w-screen">
      <div className="font-Poppins tracking-wider max-w-4xl m-auto px-5 bg-background-900">
        <Router>
          <Navbar />
          <Suspense fallback={<LoadSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Suspense>
          <div className="h-5" />
        </Router>
      </div>
    </div>
  );
}

export default App;
