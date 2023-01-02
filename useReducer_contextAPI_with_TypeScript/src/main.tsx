import ReactDOM from "react-dom/client";
import App from "./App";
import MyContextProvider from "./Contexts/MyContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
