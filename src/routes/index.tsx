import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";

import { AppTabRoutes } from "./AppTabRoutes";
import { AppStackRoutes } from "./AppStackRoutes";
import { AuthStackRoutes } from "./AuthStackRoutes";

export const Routes: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {!!user ? <AppTabRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  );
};
