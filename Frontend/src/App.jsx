import { DefaultTemplate } from "./components/DefaultTemplate";
import "./styles/index.scss";
import { RoutesMain } from "./routes";
import { useContext } from "react";
import { ClientContext } from "./providers/clientsContext";
import { Loading } from "./components/loading";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { loading } = useContext(ClientContext);
  return (
    <div className="App">
      <DefaultTemplate>
        {loading ? <Loading /> : <RoutesMain />}
      </DefaultTemplate>
      <ToastContainer autoClose={3000} position="bottom-left" theme="dark" />
    </div>
  );
}

export default App;
