import hydrate from "ultra/hydrate.js";
import App from "./src/index.tsx";

// React Router
import { BrowserRouter } from "react-router-dom";

function ClientApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

hydrate(document, <ClientApp />);
