import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import SignIn from "./pages/auth/SignIn";
import EnterCode from "./pages/auth/EnterCode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/enter-code" element={<EnterCode />} />
      </Routes>
    </Router>
  );
}

export default App;
