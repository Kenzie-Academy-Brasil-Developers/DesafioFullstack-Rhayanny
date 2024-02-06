import { MdDelete, MdEdit } from "react-icons/md";
import style from "./style.module.scss";
import { useContext } from "react";
import { ContactContext } from "../../providers/contactsContext";

export const ContactsCard = ({ contacts }) => {
  const { contactDeletion, setIsOpenEditContact, setIsEditContact } =
    useContext(ContactContext);

  const modalInfo = () => {
    setIsOpenEditContact(true);
    setIsEditContact(contacts);
  };

  return (
    <li className={style.card}>
      <div>
        <h3 className="title two">{contacts.name}</h3>
        <span>
          <p className="Headline">{contacts.phone}</p>
          <button onClick={() => modalInfo()} title="Editar" aria-label="edit">
            <MdEdit />
          </button>
          <button
            onClick={() => contactDeletion(contacts.id)}
            title="Delete"
            aria-label="delete"
          >
            <MdDelete />
          </button>
        </span>
      </div>
    </li>
  );
};
