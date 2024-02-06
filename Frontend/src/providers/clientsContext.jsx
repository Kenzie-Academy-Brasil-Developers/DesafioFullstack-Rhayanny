import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isContactsList, setContactsList] = useState([]);

  const [updatedClient, setUpdatedClient] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getClient = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/clients`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClient(data);
        setContactsList(data.contacts);
        navigate("/contacts");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      getClient();
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  const refreshContacts = async () => {
    try {
      const { data } = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setContactsList(data.contacts);
    } catch (error) {
      console.log(error);
    }
  };

  const clientLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);
      setClient(data.client);
      localStorage.setItem("@TOKEN", data.token);
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      refreshContacts();
      navigate("/contacts");
    } catch (error) {
      if (
        error.response.data.message === "Incorrect email / password combination"
      ) {
        toast.error("Email ou Senha incorretos 🙁");
      }
    } finally {
      setLoading(false);
    }
  };

  const clientLogout = () => {
    setClient(null);
    navigate("/");
    localStorage.removeItem("@CLIENTID");
    localStorage.removeItem("@TOKEN");
    toast.warning("Deslogando... 😉");
  };

  const clientRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/clients", formData);
      toast.success("Cliente cadastrado com sucesso 😉");
    } catch (error) {
      if (error.response.data.message === "Email already exists") {
        toast.error("Cliente já cadastrado 😉");
      }
    } finally {
      setLoading(false);
    }
  };

  const ClientsUpdate = async (formData) => {
    try {
      const { data } = await api.patch(`/clients`, formData);
      setClient(data);
      toast.success("Perfil editado com sucesso 😊🔧");
      setIsOpenModal(false);
    } catch (error) {
      toast.error(
        error.response?.data.message ||
          "Ocorreu um erro durante a atualização do perfil."
      );
    }
  };

  const ClientDeletion = async () => {
    try {
      await api.delete(`/clients`);
      toast.warning("Perfil DELETADO com sucesso. ⚠️");
      clientLogout();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        ClientsUpdate,
        ClientDeletion,
        clientLogout,
        clientLogin,
        clientRegister,
        setLoading,
        loading,
        updatedClient,
        isOpenModal,
        setIsOpenModal,
        setUpdatedClient,
        client,
        setClient,
        isContactsList,
        setContactsList,
        refreshContacts,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
