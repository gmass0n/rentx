import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import {
  Container,
  Header,
  HeaderContent,
  CarsTotal,
  CarsList,
  CarsListSeparator,
} from "./styles";

const cars = [
  {
    name: "RS 5 Coupé",
    brand: "Audi",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    picture:
      "https://catalogo.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841521101233346.png?s=fill&w=275&h=183&q=70&t=true",
  },
  {
    name: "Panamera",
    brand: "Porsche",
    rent: {
      period: "Ao dia",
      price: 340,
    },
    picture:
      "https://freebiescloud.com/wp-content/uploads/2021/02/PORSCHE-PANAMERA-2021-1.png",
  },
];

export const Home: FC = () => {
  const navigation = useNavigation();

  const handleNavigateToCarDetails = () => {
    navigation.navigate("CarDetails");
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
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <CarsTotal>Total de 12 carros</CarsTotal>
        </HeaderContent>
      </Header>

      <CarsList
        data={cars}
        keyExtractor={(car: any) => car.name}
        renderItem={({ item: car }) => (
          <Car data={car as any} onPress={handleNavigateToCarDetails} />
        )}
        ItemSeparatorComponent={CarsListSeparator}
      />
    </Container>
  );
};
