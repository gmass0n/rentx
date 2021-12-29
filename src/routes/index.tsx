import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";

import { AppTabRoutes } from "./AppTabRoutes";
import { AuthStackRoutes } from "./AuthStackRoutes";
import AppLoading from "expo-app-loading";

export const Routes: FC = () => {
  const { user, isValidatingUser } = useAuth();

  if (isValidatingUser) return <AppLoading />;

  return (
    <NavigationContainer>
      {!!user ? <AppTabRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  );
};
