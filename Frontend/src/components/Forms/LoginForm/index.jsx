import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { loginFormSchema } from "./loginFormSchema";
import { useContext } from "react";
import { ClientContext } from "../../../providers/clientsContext";
import { InputPassword } from "../../inputPassword/inputPassword";
import styles from "./style.module.scss";

export const LoginForm = () => {
  const { clientLogin, loading } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const submit = (formData) => {
    clientLogin(formData);
  };

  return (
    <section>
      <form className={styles.formLogin} onSubmit={handleSubmit(submit)}>
        <h2 className="title one">LOGIN</h2>
        <Input
          label="Email"
          type="text"
          {...register("email")}
          placeholder="Digite aqui seu email"
          error={errors.email}
          disabled={loading}
        />
        <InputPassword
          label="Senha"
          {...register("password")}
          placeholder="Digite uma senha"
          error={errors.password}
          disabled={loading}
        />

        <button className="btnBig" type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </button>
        <span className="title Headline">Ainda não possui uma conta?</span>

        <Link className="btnBig" to="/clients">
          Cadastre-se
        </Link>
      </form>
    </section>
  );
};
