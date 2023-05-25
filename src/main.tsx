import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  // </React.StrictMode>
);
