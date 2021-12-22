import { useNavigation } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { api } from "../../services/api";

import { CarDTO } from "../../dtos/CarDTO";

import { Car } from "../../components/Car";

import {
  Container,
  Header,
  HeaderContent,
  CarsTotal,
  CarsList,
  CarsListSeparator,
} from "./styles";
import { Spinner } from "../../components/Spinner";

export const Home: FC = () => {
  const navigation = useNavigation();

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

      {isLoading ? (
        <Spinner />
      ) : (
        <CarsList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item: car }) => (
            <Car data={car} onPress={handleNavigateToCarDetails} />
          )}
          ItemSeparatorComponent={CarsListSeparator}
        />
      )}
    </Container>
  );
};
