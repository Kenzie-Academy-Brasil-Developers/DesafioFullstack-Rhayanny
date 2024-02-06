import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { resgisterFormSchema } from "./registerFormSchema";
import { useContext, useState } from "react";
import { ClientContext } from "../../../providers/clientsContext";
import { InputPassword } from "../../inputPassword/inputPassword";
import style from "../RegisterForm/style.module.scss";

export const RegisterForm = () => {
  const { clientRegister, loading } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resgisterFormSchema),
  });

  const submit = (formData) => {
    clientRegister(formData);
  };

  return (
    <section>
      <form className={style.formRegister} onSubmit={handleSubmit(submit)}>
        <h2 className="title one">CADASTRO</h2>
        <Input
          label=" Nome"
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
          error={errors.name}
          disabled={loading}
        />
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
        <Input
          label="Contato"
          type="text"
          {...register("phone")}
          placeholder="Digite seu contato"
          error={errors.phone}
          disabled={loading}
        />

        <button className="btnBig" disabled={loading} type="submit">
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
        <Link className="btnBig" to="/">
          Voltar
        </Link>
      </form>
    </section>
  );
};
