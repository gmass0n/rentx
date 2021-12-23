import { FC, useEffect, useRef, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { format, isToday } from "date-fns";
import { DateData } from "react-native-calendars/src/types";
import { useTheme } from "styled-components";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { api } from "../../services/api";

import ArrowSVG from "../../assets/arrow.svg";

import { generateCalendarInterval } from "../../utils/generateCalendarInterval";
import { getPlatformDate } from "../../utils/getPlatformDate";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, MarkedDateProps } from "../../components/Calendar";
import { AnimatedLoading } from "../../components/AnimatedLoading";

import { AppStackRoutesParamList } from "../../routes/AppStackRoutes";

import { ScheduleByCarDTO } from "../../dtos/ScheduleByCarDTO";

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

type SchedulingScreenRouteProp = RouteProp<
  AppStackRoutesParamList,
  "Scheduling"
>;

interface RentalPeriodProps {
  formattedStart: string;
  formattedEnd: string;
}

export const Scheduling: FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute<SchedulingScreenRouteProp>();

  const { car } = route.params;

  const animatedOpacity = useSharedValue(0);

  const withOpacityStyle = useAnimatedStyle(() => ({
    opacity: animatedOpacity.value,
  }));

  const lastSelectedDate = useRef({} as DateData);

  const [markedDates, setMarkedDates] = useState({} as MarkedDateProps);
  const [disabledDates, setDisabledDates] = useState({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriodProps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: schedulesByCar } = await api.get<ScheduleByCarDTO>(
          `/schedules_bycars/${car.id}`
        );

        if (schedulesByCar?.unavailable_dates?.length > 0) {
          setDisabledDates(
            schedulesByCar.unavailable_dates.reduce((acc, unavailableDate) => {
              const newAcc = acc || {};

              newAcc[unavailableDate] = {
                disabled: true,
                disableTouchEvent: true,
                ...(isToday(getPlatformDate(new Date(unavailableDate))) && {
                  textColor: theme.colors.main,
                }),
              };

              return newAcc;
            }, {} as MarkedDateProps)
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [car]);

  useEffect(() => {
    if (!isLoading) {
      animatedOpacity.value = withTiming(1, { duration: 500 });
    }
  }, [isLoading]);

  const handleNavigateToSchedulingDetails = () => {
    navigation.navigate("SchedulingDetails", {
      car,
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
      formattedStart: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      formattedEnd: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
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
            fim do aluguel.
          </Title>

          <RentalPeriod>
            <DateInfo isSelected={!!rentalPeriod.formattedStart}>
              <DateTitle>DE</DateTitle>

              <DateValue>{rentalPeriod.formattedStart}</DateValue>
            </DateInfo>

            <ArrowSVG />

            <DateInfo isSelected={!!rentalPeriod.formattedEnd}>
              <DateTitle>ATÉ</DateTitle>

              <DateValue>{rentalPeriod.formattedEnd}</DateValue>
            </DateInfo>
          </RentalPeriod>
        </HeaderContent>
      </Header>

      <Content>
        {isLoading ? (
          <AnimatedLoading />
        ) : (
          <Animated.View style={withOpacityStyle}>
            <Calendar
              markedDates={{ ...markedDates, ...disabledDates }}
              onDayPress={handleChangeDate}
            />
          </Animated.View>
        )}
      </Content>

      <Footer>
        <Button
          title="Continuar"
          onPress={handleNavigateToSchedulingDetails}
          disabled={!rentalPeriod.formattedStart || !rentalPeriod.formattedEnd}
        />
      </Footer>
    </Container>
  );
};
