function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Alex. Todos los derechos reservados.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://github.com/gonzaga24" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/alex-josue-gonzaga-tinitana-867a17367" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:alexgonzaga1004@gmail.com" target="_blank" className="text-white">
            <i className="bi bi-envelope-fill"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
