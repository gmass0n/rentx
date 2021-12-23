import { FC, createContext, useContext, useState, useCallback } from "react";
import { api } from "../services/api";

interface User {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthData {
  user?: User;
  token?: string;
}

interface IAuthContextData {
  user: User | undefined;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [data, setData] = useState({} as AuthData);

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    const response = await api.post("/sessions", credentials);

    const { token, user } = response.data;

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
