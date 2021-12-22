import { FC } from "react";
import { StatusBar } from "react-native";
import Reanimated from "react-native-reanimated";

import { Container } from "./styles";

export const Splash: FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    </Container>
  );
};
