import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>
      <h1 className="display-1 text-danger">404</h1>
      <p className="lead">Oops... La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
}

export default ErrorPage;
