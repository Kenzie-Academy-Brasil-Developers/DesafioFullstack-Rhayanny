import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from "./providers/clientsContext.jsx";
import { ContactProvider } from "./providers/contactsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
