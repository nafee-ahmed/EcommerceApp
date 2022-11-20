import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CategoryPage from "./pages/ChooseCategoryPage";
import AddCategory from "./pages/AddCategoryPage";
import BuyCategoryPage from "./pages/BuyCategoryPage";
import BuyingPage from "./pages/BuyingPage";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add/category" element={<CategoryPage />} />
          <Route path="/category/:cat" element={<AddCategory />} />
          <Route path="/buy/:cat" element={<BuyCategoryPage />} />
          <Route path="/cart" element={<BuyingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
