import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CategoryPage from "./pages/ChooseCategoryPage";
import AddCategory from "./pages/AddCategoryPage";
import BuyCategoryPage from "./pages/BuyCategoryPage";
import BuyingPage from "./pages/BuyingPage";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";
import { AuthContext } from "./contexts/AuthContext";
import useCart from "./hooks/useCart";
import { ax } from "./utils/constants";

function App() {
  const { user } = useContext(AuthContext);
  const { cartDispatch, cart } = useContext(CartContext);

  const { refreshCartList } = useCart();

  useEffect(() => {
    if (user) {
      const updateCart = async () => {
        await refreshCartList();
      };
      updateCart();
    } else {
      cartDispatch({ type: "UPDATE_CART", payload: [] });
    }
  }, [user]);

  return (
    <div>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add/category" element={<CategoryPage />} />
          <Route path="/category/:cat" element={<AddCategory />} />
          <Route path="/buy/:cat/:id" element={<BuyCategoryPage />} />
          <Route path="/cart" element={<BuyingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
