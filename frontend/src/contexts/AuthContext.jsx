import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const toast = useToast();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(authState.user));
  }, [authState.user]);

  useEffect(() => {
    if (authState.error)
      toast({
        title: authState.error?.message,
        status: "error",
        isClosable: true,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.error]);

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        loading: authState.loading,
        error: authState.error,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
