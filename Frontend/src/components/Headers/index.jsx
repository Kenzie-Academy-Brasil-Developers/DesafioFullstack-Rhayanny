import { useContext } from "react";
import { ClientContext } from "../../providers/clientsContext";
import styles from "./style.module.scss";
import { MdEdit } from "react-icons/md";

export const Header = () => {
  const { client, clientLogout, setIsOpenModal, setUpdatedClient } =
    useContext(ClientContext);

  const modalInfo = () => {
    setIsOpenModal(true);
    setUpdatedClient(client);
  };

  return (
    <header>
      <h2>Contacts</h2>
      <div className="container">
        <div className={styles.flexBox}>
          <div>
            <div>
              <p className="paragraph">{client?.name}</p>
              <p className="paragraph">{client?.email}</p>
              <p className="paragraph">{client?.phone}</p>
            </div>
            <span
              className="btnEdit"
              onClick={() => modalInfo(true)}
              title="Editar"
              aria-label="edit"
            >
              <MdEdit />
            </span>

            <button className="btnSm" onClick={() => clientLogout()}>
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
