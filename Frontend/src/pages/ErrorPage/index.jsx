import style from "./style.module.scss";

export const ErrorPage = () => {
  return (
    <main className={style.error}>
      <h1>Erro: 404</h1>
      <p>Não foi possível encontrar a página!</p>
      <div>
        <img
          src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif"
          alt="errorGif"
        />
      </div>
    </main>
  );
};
