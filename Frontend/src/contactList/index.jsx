import { MdAdd } from "react-icons/md";
import { useContext } from "react";
import { ContactsCard } from "./contactsCard";
import { ContactContext } from "../providers/contactsContext";
import { CreateContactModal } from "../components/Forms/ModalForm/modalContacts/modalCreate/contactsCreate";
import { ClientContext } from "../providers/clientsContext";
import style from "../contactList/style.module.scss";
import { ContactEditModal } from "../components/Forms/ModalForm/modalContacts/modalEdit/contactsEdit";

export const ContactList = () => {
  const { isOpenContactCreate, setIsOpenContactCreate, isOpenEditContact } =
    useContext(ContactContext);

  const { isContactsList } = useContext(ClientContext);

  const modalCreate = () => {
    setIsOpenContactCreate(true);
  };

  return (
    <section className={style.listCard}>
      <div>
        <h1 className="title two">Seus Contatos</h1>
        <button className="btnBig" onClick={() => modalCreate()}>
          <MdAdd />
        </button>
      </div>

      <ul>
        {isContactsList.length <= 0 ? (
          <p className="title two">Nenhum contato adicionado ainda 😕❌</p>
        ) : (
          isContactsList.map((contacts) => (
            <ContactsCard key={contacts.id} contacts={contacts} />
          ))
        )}
      </ul>
      {isOpenContactCreate ? <CreateContactModal /> : null}
      {isOpenEditContact ? <ContactEditModal /> : null}
    </section>
  );
};
