import { useContext } from "react";
import { ClientModal } from "../../components/Forms/ModalForm/modalClients";
import { Header } from "../../components/Headers";
import { ClientContext } from "../../providers/clientsContext";
import { ContactList } from "../../contactList";
import style from "../DeshboardPage/style.module.scss";

export const DeshboardPage = () => {
  const { isOpenModal } = useContext(ClientContext);

  return (
    <main className={style.container}>
      <Header />
      {isOpenModal ? <ClientModal /> : null}
      <ContactList />
    </main>
  );
};
