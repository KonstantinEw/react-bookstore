import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "App";
import { GlobalStyles } from "ui";
import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";
import "./firebase";
import { Loader } from "components";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>,
);
