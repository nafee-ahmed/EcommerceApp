import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
