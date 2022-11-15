import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);
