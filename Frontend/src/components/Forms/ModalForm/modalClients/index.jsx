import { useContext } from "react";
import { ClientContext } from "../../../../providers/clientsContext";
import { Input } from "../../input";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { MdDelete } from "react-icons/md";

export const ClientModal = () => {
  const { setIsOpenModal, ClientsUpdate, client, ClientDeletion, loading } =
    useContext(ClientContext);

  const { register, handleSubmit, reset } = useForm({
    values: {
      name: client.name,
      email: client.email,
      phone: client.phone,
    },
  });

  const submit = (formData) => {
    return ClientsUpdate(formData);
  };

  return (
    <aside className={style.modalOverlay} role="dialog">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <h2 className="title one">Detalhes do Perfil</h2>
          <p onClick={() => setIsOpenModal(false)}>X</p>
        </div>
        <Input
          label="Seu Nome"
          type="text"
          placeholder="Digite"
          {...register("name")}
        />
        <Input
          label="Seu Email"
          type="text"
          placeholder="Digite"
          {...register("email")}
        />

        <Input
          label="Seu Contato"
          type="text"
          placeholder="Digite"
          {...register("phone")}
        />

        <button className="btnBig" type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Salvar alterações"}
        </button>
        <span
          className="btnBig"
          onClick={() => ClientDeletion()}
          title="Delete"
          aria-label="delete"
        >
          Deletar Conta
        </span>
      </form>
    </aside>
  );
};
