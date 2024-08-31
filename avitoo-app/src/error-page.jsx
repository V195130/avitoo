import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className="error-page">
      <h1>
        404 <span>Страница не найдена</span>
      </h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`} className="error-page--link">
        Вернуться на главную
      </Link>
    </div>
  );
};
