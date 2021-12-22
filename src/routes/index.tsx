import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultStack } from "./DefaultStack";

export const Routes: FC = () => {
  return (
    <NavigationContainer>
      <DefaultStack />
    </NavigationContainer>
  );
};
