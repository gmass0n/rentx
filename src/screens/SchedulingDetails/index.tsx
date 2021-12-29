import { FC, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { api } from "../../services/api";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlatformDate } from "../../utils/getPlatformDate";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import { AppStackRoutesParamList } from "../../routes/AppStackRoutes";

import { ScheduleByCarDTO } from "../../dtos/ScheduleByCarDTO";

import {
  Container,
  Header,
  HeaderContent,
  CarImagesContainer,
  CarImagesContent,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  RentalPeriod,
  CalendarIconBackground,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceQuotaTitle,
  RentalPriceQuotaValue,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from "./styles";

type SchedulingDetailsScreenRouteProp = RouteProp<
  AppStackRoutesParamList,
  "SchedulingDetails"
>;

interface RentaPeriodProps {
  formattedStart: string;
  formattedEnd: string;
}

export const SchedulingDetails: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<SchedulingDetailsScreenRouteProp>();
  const theme = useTheme();

  const { car, dates } = route.params;

  const [isScheduling, setIsScheduling] = useState(false);

  const rentalPeriod: RentaPeriodProps = {
    formattedStart: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
    formattedEnd: format(
      getPlatformDate(new Date(dates[dates.length - 1])),
      "dd/MM/yyyy"
    ),
  };

  const rentTotal = Number(dates.length * car.price);

  const handleFinishScheduling = async () => {
    try {
      setIsScheduling(true);

      const { data: schedulesByCar } = await api.get<ScheduleByCarDTO>(
        `/schedules_bycars/${car.id}`
      );

      const findUnavailableDate = dates.find((date) =>
        schedulesByCar.unavailable_dates.includes(date)
      );

      if (findUnavailableDate) {
        const formattedDate = format(
          getPlatformDate(new Date(findUnavailableDate)),
          "dd 'de' MMMM 'de' yyyy",
          { locale: ptBR }
        );
        setIsScheduling(false);
        Alert.alert(`O carro já está alugado para o dia ${formattedDate}.`);
        return;
      }

      const newUnavailableDates = [
        ...schedulesByCar.unavailable_dates,
        ...dates,
      ];

      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: newUnavailableDates,
      });

      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Confirmation",
            params: {
              title: "Carro alugado!",
              message: `Agora você so precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
              nextScreenRoute: "Home",
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      setIsScheduling(false);
      Alert.alert("Ops, ocorreu um erro ao alugar o carro!");
    }
  };

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />

      <Header>
        <HeaderContent>
          <BackButton />
        </HeaderContent>
      </Header>

      <CarImagesContainer>
        <CarImagesContent>
          <ImagesSlider photos={car.photos} />
        </CarImagesContent>
      </CarImagesContainer>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>

            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>

            <Price>{`R$ ${car.price}`}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((accesory) => (
            <Accessory
              key={accesory.id}
              name={accesory.name}
              icon={getAccessoryIcon(accesory.type)}
            />
          ))}
        </Acessories>

        <RentalPeriod>
          <CalendarIconBackground>
            <Feather
              name="calendar"
              size={RFValue(20)}
              color={theme.colors.shape}
            />
          </CalendarIconBackground>

          <DateInfo>
            <DateTitle>DE</DateTitle>

            <DateValue>{rentalPeriod.formattedStart}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(14)}
            color={theme.colors.text_details}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>

            <DateValue>{rentalPeriod.formattedEnd}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceQuota>
            <RentalPriceQuotaTitle>Total</RentalPriceQuotaTitle>

            <RentalPriceQuotaValue>{`R$ ${car.price} x${dates.length} ${
              dates.length === 1 ? "diária" : "diárias"
            }`}</RentalPriceQuotaValue>
          </RentalPriceQuota>

          <RentalPriceTotal>{`R$ ${rentTotal}`}</RentalPriceTotal>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color="success"
          onPress={handleFinishScheduling}
          isLoading={isScheduling}
        />
      </Footer>
    </Container>
  );
};
