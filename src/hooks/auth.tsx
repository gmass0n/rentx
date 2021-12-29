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

type UpdateUserData = Pick<User, "avatar" | "name" | "driver_license">;

interface IAuthContextData {
  user: User | undefined;
  signIn(credentials: SignInCredentials): Promise<void>;
  isValidatingUser: boolean;
  signOut(): Promise<void>;
  updateUser(data: UpdateUserData): Promise<void>;
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
  }, []);

  const signOut = useCallback(async () => {
    const userCollection = database.get<ModelUser>("users");

    await database.write(async () => {
      const selectedUser = await userCollection.find(user.id);

      await selectedUser.destroyPermanently();

      setUser(undefined);
    });
  }, [user]);

  const updateUser = useCallback(
    async (data: UpdateUserData) => {
      const userCollection = database.get<ModelUser>("users");

      await database.write(async () => {
        const selectedUser = await userCollection.find(user.id);

        await selectedUser.update((userData) => {
          userData.name = data.name;
          userData.driver_license = data.driver_license;
          userData.avatar = data.avatar;
        });

        setUser((prevState) => ({ ...prevState, ...data }));
      });
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{ signIn, user, isValidatingUser, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
