import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import ChatPage from "@/pages/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);
