import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { AnimatedLoading } from "../../components/AnimatedLoading";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";

import { ScheduleByUserDTO } from "../../dtos/ScheduleByUserDTO";

import { api } from "../../services/api";

import {
  Container,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  Content,
  AppointmentsHeader,
  AppointmentsTitle,
  AppointmentsQuantity,
  AppointmentsList,
  AppointmentsListSeparator,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  CarFooterArrow,
} from "./styles";

export const MyCars: FC = () => {
  const animatedOpacity = useSharedValue(0);

  const withOpacityStyle = useAnimatedStyle(() => ({
    opacity: animatedOpacity.value,
  }));

  const [appointments, setAppointments] = useState<ScheduleByUserDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: schedulesByUser } = await api.get<ScheduleByUserDTO[]>(
          "/schedules_byuser?user_id=1"
        );

        setAppointments(schedulesByUser);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      animatedOpacity.value = withTiming(1, { duration: 500 });
    }
  }, [isLoading]);

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
            Seus agendamentos,{"\n"}
            estão aqui.
          </Title>

          <Subtitle>Conforto, segurança e praticidade.</Subtitle>
        </HeaderContent>
      </Header>

      <Content>
        {isLoading ? (
          <AnimatedLoading />
        ) : (
          <Animated.View
            style={[
              withOpacityStyle,
              { width: "100%", flex: 1, alignItems: "center" },
            ]}
          >
            <AppointmentsHeader>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{appointments.length}</AppointmentsQuantity>
            </AppointmentsHeader>

            <AppointmentsList
              data={appointments}
              keyExtractor={(appointment) => String(appointment.id)}
              renderItem={({ item: appointment }) => (
                <CarWrapper>
                  <Car data={appointment.car} />

                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>

                    <CarFooterPeriod>
                      <CarFooterDate>{appointment.startDate}</CarFooterDate>

                      <CarFooterArrow />

                      <CarFooterDate>{appointment.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
              ItemSeparatorComponent={AppointmentsListSeparator}
            />
          </Animated.View>
        )}
      </Content>
    </Container>
  );
};
