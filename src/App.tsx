import React from "react";
import HomePage from "./pages/HomePage";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  );
}

export default App;
