import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { Spinner } from "../../components/Spinner";

import { CarDTO } from "../../dtos/CarDTO";
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
} from "./styles";

export const MyCars: FC = () => {
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

          <Subtitle>Conforto, segurança e praticidade.</Subtitle>
        </HeaderContent>
      </Header>

      <Content>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <AppointmentsHeader>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{appointments.length}</AppointmentsQuantity>
            </AppointmentsHeader>

            <AppointmentsList
              data={appointments}
              keyExtractor={(appointment) => String(appointment.id)}
              renderItem={({ item: appointment }) => (
                <Car data={appointment.car} />
              )}
              ItemSeparatorComponent={AppointmentsListSeparator}
            />
          </>
        )}
      </Content>
    </Container>
  );
};
