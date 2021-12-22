import { FC } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, HeaderContent, CarsTotal } from "./styles";

export const Home: FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <CarsTotal>Total de 12 carros</CarsTotal>
        </HeaderContent>
      </Header>
    </Container>
  );
};
