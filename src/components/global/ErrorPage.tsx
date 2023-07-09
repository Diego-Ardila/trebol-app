import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Esta pagina no existe';
  }

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Lo sentimos, se ha presentado un error.</p>
      <p className="error-message">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}