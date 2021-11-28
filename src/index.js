import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from 'react-toast-notifications';

// store.subscribe(()=> console.log(store.getstate()))

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
        >
          <App />
        </ToastProvider>
      </PersistGate>
    </Provider>,
  document.getElementById("root")
);
