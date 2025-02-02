import { HelmetProvider } from 'react-helmet-async';
import hydrate from "ultra/hydrate.js";
import App from "./src/app/App.tsx";

import { Provider } from 'react-redux';

import store from './src/app/store.ts';

// React Router
import { BrowserRouter } from "react-router-dom";

function ClientApp() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

hydrate(document, <ClientApp />);
