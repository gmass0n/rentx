import { FC, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import ArrowSVG from "../../assets/arrow.svg";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, MarkedDateProps } from "../../components/Calendar";

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
import { DateData } from "react-native-calendars/src/types";
import { generateCalendarInterval } from "../../utils/generateCalendarInterval";

export const Scheduling: FC = () => {
  const navigation = useNavigation();

  const lastSelectedDate = useRef({} as DateData);

  const [markedDates, setMarkedDates] = useState({} as MarkedDateProps);

  const handleNavigateToSchedulingDetails = () => {
    navigation.navigate("SchedulingDetails");
  };

  const handleChangeDate = (date: DateData) => {
    let start = lastSelectedDate.current.timestamp
      ? lastSelectedDate.current
      : date;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    lastSelectedDate.current = end;

    const interval = generateCalendarInterval(start, end);

    setMarkedDates(interval);
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
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Continuar" onPress={handleNavigateToSchedulingDetails} />
      </Footer>
    </Container>
  );
};
