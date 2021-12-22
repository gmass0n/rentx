import { FC, useRef, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar, Alert } from "react-native";
import { format } from "date-fns";
import { DateData } from "react-native-calendars/src/types";

import ArrowSVG from "../../assets/arrow.svg";

import { generateCalendarInterval } from "../../utils/generateCalendarInterval";
import { getPlatformDate } from "../../utils/getPlatformDate";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, MarkedDateProps } from "../../components/Calendar";

import { DefaultStackParamList } from "../../routes/DefaultStack";

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

type SchedulingScreenRouteProp = RouteProp<DefaultStackParamList, "Scheduling">;

interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}

export const Scheduling: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<SchedulingScreenRouteProp>();

  const lastSelectedDate = useRef({} as DateData);

  const [markedDates, setMarkedDates] = useState({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriodProps);

  const handleNavigateToSchedulingDetails = () => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Selecione o intervalo para alugar");
      return;
    }

    navigation.navigate("SchedulingDetails", {
      car: route.params.car,
      dates: Object.keys(markedDates),
    });
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

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
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
            <DateInfo isSelected={!!rentalPeriod.startFormatted}>
              <DateTitle>DE</DateTitle>

              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>

            <ArrowSVG />

            <DateInfo isSelected={!!rentalPeriod.endFormatted}>
              <DateTitle>ATÉ</DateTitle>

              <DateValue>{rentalPeriod.endFormatted}</DateValue>
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
