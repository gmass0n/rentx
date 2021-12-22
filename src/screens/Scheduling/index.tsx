import React, { FC } from "react";
import { StatusBar } from "react-native";

import ArrowSVG from "../../assets/arrow.svg";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  HeaderContent,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

export const Scheduling: FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <BackButton onPress={() => null} color="shape" />

          <Title>
            Escolha uma{"\n"}
            data de início e{"\n"}
            fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo isSelected>
              <DateTitle>DE</DateTitle>

              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <ArrowSVG />

            <DateInfo>
              <DateTitle>ATÉ</DateTitle>

              <DateValue></DateValue>
            </DateInfo>
          </RentalPeriod>
        </HeaderContent>
      </Header>

      <Content></Content>

      <Footer>
        <Button title="Continuar"></Button>
      </Footer>
    </Container>
  );
};
