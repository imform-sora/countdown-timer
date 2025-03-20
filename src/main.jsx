import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TimerPage from "./timer-page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimerPage />
  </StrictMode>
);
