import { useEffect } from "react";
import { FC, createContext, useContext, useState, useCallback } from "react";

import { database } from "../database";
import { User as ModelUser } from "../database/models/User";

import { SessionDTO } from "../dtos/SessionDTO";

import { api } from "../services/api";

export interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: User | undefined;
  signIn(credentials: SignInCredentials): Promise<void>;
  isValidatingUser: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
  const [isValidatingUser, setIsValidatingUse] = useState(true);

  useEffect(() => {
    (async () => {
      const userCollection = database.get<ModelUser>("users");
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;

        api.defaults.headers["Authorization"] = `Bearer ${userData.token}`;

        setUser(userData);
      }

      setIsValidatingUse(false);
    })();
  }, []);

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    try {
      const response = await api.post<SessionDTO>("/sessions", credentials);

      const { token, user } = response.data;

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      const userCollection = database.get<ModelUser>("users");
      await database.write(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = token;
        });
      });

      setUser({ ...user, user_id: user.id, token });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, isValidatingUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
