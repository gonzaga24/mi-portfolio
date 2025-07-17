import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

function ContactPage() {
  const [state, handleSubmit] = useForm("movlqkrv");
  if (state.succeeded) {
    //Una vez se ha enviado el mensaje le mostramos un modal al usuario donde le indicamos que ha sucedido todo correctamente y le damos la opción de volver al inicio
    return (
        <>
            <div
                className="modal fade show"
                tabIndex="-1"
                style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                aria-modal="true"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Mensaje enviado</h5>
                        </div>
                        <div className="modal-body">
                            <p>¡Tu mensaje ha sido enviado correctamente!</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-primary">
                              Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
  }

  return (
    <section className="container mt-5 bg-secondary bg-gradient p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Tu correo:{" "}
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            placeholder="name@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Escribe aquí tu mensaje:{" "}
          </label>
          <textarea className="form-control" id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-dark" type="submit" disabled={state.submitting}>
            {" "}
            Enviar{" "}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
