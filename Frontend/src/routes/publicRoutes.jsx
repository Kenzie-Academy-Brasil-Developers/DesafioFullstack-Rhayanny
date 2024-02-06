import { useContext } from "react";
import { ClientContext } from "../providers/clientsContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const { client } = useContext(ClientContext);

  return !client ? <Outlet /> : <Navigate to="/" />;
};
