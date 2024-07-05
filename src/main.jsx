import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import { ThemeProvider , Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


import config from "./aws-exports";
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider >
        <Authenticator.Provider>
          <App />
        </Authenticator.Provider>
      </ThemeProvider >
  </React.StrictMode>,
)
