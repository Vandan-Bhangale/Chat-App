import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./Context/authContext.jsx";
import { SocketProvider } from "./Context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SocketProvider>
         <App />
      </SocketProvider>
    </AuthProvider>
  </StrictMode>
);
