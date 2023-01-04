import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import './style.css'
createRoot(document.getElementById("root")).render(<Provider store={store}>
    <App />
</Provider>);
