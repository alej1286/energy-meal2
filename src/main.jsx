import React from "react";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
/* import { ThemeProvider } from "@aws-amplify/ui-react"; */
import { ThemeProvider } from "@material-tailwind/react";

import config from "./aws-exports";
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
