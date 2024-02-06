import { useForm } from "react-hook-form";
import { Input } from "../../../input";
import { useContext } from "react";
import { ClientContext } from "../../../../../providers/clientsContext";
import { ContactContext } from "../../../../../providers/contactsContext";
import style from "./style.module.scss";

export const ContactEditModal = () => {
  const { loading } = useContext(ClientContext);
  const { setIsOpenEditContact, contactUpdating, isEditContact } =
    useContext(ContactContext);

  const { register, handleSubmit } = useForm({
    values: {
      name: isEditContact.name,
      email: isEditContact.email,
      phone: isEditContact.phone,
    },
  });

  const submit = (formData) => {
    return contactUpdating(formData, isEditContact.id);
  };

  return (
    <aside className={style.modalOverlay} role="dialog">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <h2 className="title one">Detalhes do Perfil</h2>
          <p onClick={() => setIsOpenEditContact(false)}>X</p>
        </div>
        <Input
          label=" Nome"
          type="text"
          placeholder="Digite"
          {...register("name")}
        />
        <Input
          label="Email"
          type="text"
          placeholder="Digite"
          {...register("email")}
        />

        <Input
          label="Contato"
          type="text"
          placeholder="Digite"
          {...register("phone")}
        />

        <button className="btnBig" type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Salvar alterações"}
        </button>
      </form>
    </aside>
  );
};
