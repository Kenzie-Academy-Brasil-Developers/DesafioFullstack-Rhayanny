import { useContext } from "react";
import { ClientContext } from "../../../../../providers/clientsContext";
import { Input } from "../../../input";
import { ContactContext } from "../../../../../providers/contactsContext";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";

export const CreateContactModal = () => {
  const { setIsOpenContactCreate, contactCreate } = useContext(ContactContext);
  const { register, handleSubmit } = useForm();
  const { loading } = useContext(ClientContext);

  const submit = (formData) => {
    contactCreate(formData);
  };

  return (
    <aside className={style.modalOverlay} role="dialog">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <h2 className="title one">Criar Contato</h2>
          <span onClick={() => setIsOpenContactCreate(false)}>X</span>
        </div>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite um nome"
          {...register("name")}
        />

        <Input
          label="Email"
          type="text"
          placeholder="Digite um email"
          {...register("email")}
        />

        <Input
          label="Contato"
          type="text"
          placeholder="Digite um contato"
          {...register("phone")}
        />

        <button type="submit" disabled={loading} className="btnBig">
          {loading ? "Carregando..." : "Salvar Contato"}
        </button>
      </form>
    </aside>
  );
};
