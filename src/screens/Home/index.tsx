import { useNavigation } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import Logo from "../../assets/logo.svg";

import { api } from "../../services/api";

import { CarDTO } from "../../dtos/CarDTO";

import { Car } from "../../components/Car";
import { Spinner } from "../../components/Spinner";

import {
  Container,
  Header,
  HeaderContent,
  CarsTotal,
  CarsList,
  CarsListSeparator,
  MyCarsButton,
} from "./styles";

export const Home: FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<CarDTO[]>("/cars");

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleNavigateToCarDetails = (car: CarDTO) => {
    navigation.navigate("CarDetails", { car });
  };

  const handleNavigateToMyCars = () => {
    navigation.navigate("MyCars");
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

          <CarsTotal>Total de {cars.length} carros</CarsTotal>
        </HeaderContent>
      </Header>

      {isLoading ? (
        <Spinner />
      ) : (
        <CarsList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item: car }) => (
            <Car data={car} onPress={() => handleNavigateToCarDetails(car)} />
          )}
          ItemSeparatorComponent={CarsListSeparator}
        />
      )}

      <MyCarsButton onPress={handleNavigateToMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={RFValue(32)}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
};
