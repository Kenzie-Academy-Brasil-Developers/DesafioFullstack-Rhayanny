import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { ClientContext } from "./clientsContext";
import { toast } from "react-toastify";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [isOpenContactCreate, setIsOpenContactCreate] = useState(false);
  const [isOpenEditContact, setIsOpenEditContact] = useState(false);
  const [isEditContact, setIsEditContact] = useState(false);

  const { isContactsList, setContactsList, refreshContacts } =
    useContext(ClientContext);

  const token = localStorage.getItem("@TOKEN");

  const contactCreate = async (formData) => {
    try {
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContactsList([...isContactsList, data]);
      setIsOpenContactCreate(false);
      toast.success("Contato criado com sucesso ! 🎉");
    } catch (error) {
      console.log(error);
      toast.error(currentError.response?.data.message);
    }
  };

  const getContact = async (id) => {
    await api.patch(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const contactUpdating = async (formData, id) => {
    try {
      await api.patch(`/contacts/${id}`, formData);

      refreshContacts();
      toast.success("Contato atualizado com sucesso! 🔧🎉");
      setIsOpenEditContact(false);
    } catch (error) {
      toast.error(currentError.response?.data.message);
    }
  };

  const contactDeletion = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      refreshContacts();
      toast.success("Contato deletado com sucesso!🗑️❌");
    } catch (error) {
      console.log(error);
      toast.error(currentError.response?.data.message);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contactDeletion,
        contactCreate,
        contactUpdating,
        isOpenContactCreate,
        setIsOpenContactCreate,
        isOpenEditContact,
        setIsOpenEditContact,
        isEditContact,
        setIsEditContact,
        getContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
