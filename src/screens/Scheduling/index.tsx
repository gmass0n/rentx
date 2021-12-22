import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import ArrowSVG from "../../assets/arrow.svg";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

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
  const navigation = useNavigation();

  const handleNavigateToSchedulingDetails = () => {
    navigation.navigate("SchedulingDetails");
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <BackButton color="shape" />

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

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Continuar" onPress={handleNavigateToSchedulingDetails} />
      </Footer>
    </Container>
  );
};
