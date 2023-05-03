import { createContext, ReactNode, useContext, useState } from "react";

const userDefaultValues = {
  username: null,
  lastname: null,
  email: null,
};

export const AuthContext = createContext<AuthContextInterface>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: userDefaultValues,
  setUser: () => {},
});

interface User {
  username: String | null;
  email: String | null;
  lastname: String | null;
}

interface AuthContextInterface {
  isAuthenticated: Boolean;
  setIsAuthenticated: Function;
  user: User;
  setUser: Function;
}

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  const [user, setUser] = useState<User>(userDefaultValues);

  const contextValue: AuthContextInterface = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
