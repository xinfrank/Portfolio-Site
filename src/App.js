import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="bg-background-900 min-h-screen min-w-screen">
      <div className="font-Poppins tracking-wider max-w-4xl m-auto px-5 bg-background-900">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <div className="h-5"></div>
        </Router>
      </div>
    </div>
  );
}

export default App;
