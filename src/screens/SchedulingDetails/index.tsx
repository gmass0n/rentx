import { FC } from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import SpeedSVG from "../../assets/speed.svg";
import AccelerationSVG from "../../assets/acceleration.svg";
import ForceSVG from "../../assets/force.svg";
import GasolineSVG from "../../assets/gasoline.svg";
import ExchangeSVG from "../../assets/exchange.svg";
import PeopleSVG from "../../assets/people.svg";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import { DefaultStackParamList } from "../../routes/DefaultStack";

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
  DefaultStackParamList,
  "SchedulingDetails"
>;

export const SchedulingDetails: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<SchedulingDetailsScreenRouteProp>();
  const theme = useTheme();

  const handleFinishScheduling = () => {
    navigation.navigate("SchedulingComplete");
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackButton />
        </HeaderContent>
      </Header>

      <CarImagesContainer>
        <CarImagesContent>
          <ImagesSlider
            urls={[
              "https://catalogo.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841521101233346.png?s=fill&w=275&h=183&q=70&t=true",
            ]}
          />
        </CarImagesContent>
      </CarImagesContainer>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>

            <Name>RS 5 Coupé</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>

            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="380Km/h" icon={SpeedSVG} />

          <Accessory name="3.2s" icon={AccelerationSVG} />

          <Accessory name="800 HP" icon={ForceSVG} />

          <Accessory name="Gasolina" icon={GasolineSVG} />

          <Accessory name="Auto" icon={ExchangeSVG} />

          <Accessory name="2 Pessoas" icon={PeopleSVG} />
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

            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(14)}
            color={theme.colors.text_details}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>

            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceQuota>
            <RentalPriceQuotaTitle>Total</RentalPriceQuotaTitle>

            <RentalPriceQuotaValue>R$ 5080 x3 diárias</RentalPriceQuotaValue>
          </RentalPriceQuota>

          <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color="success"
          onPress={handleFinishScheduling}
        />
      </Footer>
    </Container>
  );
};
