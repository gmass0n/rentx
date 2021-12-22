import { FC } from "react";
import { StatusBar } from "react-native";

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
