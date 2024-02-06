import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DeshboardPage } from "../pages/DeshboardPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/clients" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/contacts" element={<DeshboardPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
