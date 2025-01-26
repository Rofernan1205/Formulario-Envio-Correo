import "./SendEmailForm.css";
import { Formik } from "formik";
import * as Yup from "yup";

export const SendEmailForm = () => {
  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .required("El nombre es obligatorio")
      .min(4, "Debe tener al menos 4 caracteres"),
    correo: Yup.string()
      .email("Debe ser correo válido")
      .required("El correo es obligatorio"),
    mensaje: Yup.string().required("El campo es obligatorio"),
  });

  return (
    <div className="body-form d-flex justify-content-center  align-items-center">
      <div className="form-container">
        <div className="mt-5 mb-5">
          <h1 className="text-center">Send Email</h1>
        </div>
        <div className="mt-2">
          <Formik
            initialValues={{
              nombre: "",
              correo: "",
              mensaje: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 5000);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="padded-form">
                  <label className="form-label" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                  />
                  {touched.nombre && errors.nombre ? (
                    <span className="sms-error">{errors.nombre}</span>
                  ) : (
                    <span className=" sms-blank">No error</span>
                  )}
                </div>
                <div className="padded-form">
                  <label className="form-label" htmlFor="correo">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.correo}
                  />
                  {touched.correo && errors.correo ? (
                    <span className="sms-error">{errors.correo}</span>
                  ) : (
                    <span className=" sms-blank">No error</span>
                  )}
                </div>
                <div className="padded-form">
                  <label className="form-label" htmlFor="mensaje">
                    Mensaje
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mensaje}
                    rows={5}
                  />
                  {touched.mensaje && errors.mensaje ? (
                    <span className="sms-error">{errors.mensaje}</span>
                  ) : (
                    <span className=" sms-blank">No error</span>
                  )}
                </div>
                <div className="padded-form d-grid">
                  <button type="submit" className="btn btn-primary">
                    {isSubmitting ? "Enviado" : "Enviar"}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
