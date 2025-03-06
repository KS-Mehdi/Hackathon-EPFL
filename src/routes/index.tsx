import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/LandingPage";
import ChatPage from "@/pages/ChatPage";
import SignIn from "@/pages/auth/SignIn";
import EnterCode from "@/pages/auth/EnterCode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/enter-code",
    element: <EnterCode />,
  },
]);
