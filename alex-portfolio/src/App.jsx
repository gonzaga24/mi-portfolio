import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import "./styles/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const isError = location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/contact';
  
  return (
    <div className="d-flex flex-column min-vh-100">
      {isError && <Header />}
      <main className="flex-grow-1">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </main>
      {isError && <Footer />}
    </div>
  )
}

export default App
