import { useNavigation } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import Logo from "../../assets/logo.svg";

import { api } from "../../services/api";

import { CarDTO } from "../../dtos/CarDTO";

import { Car } from "../../components/Car";
import { AnimatedLoading } from "../../components/AnimatedLoading";

import {
  Container,
  Header,
  HeaderContent,
  CarsTotal,
  CarsList,
  CarsListSeparator,
  MyCarsButton,
} from "./styles";

const AnimatedCarsList = Animated.createAnimatedComponent(CarsList);

export const Home: FC = () => {
  const navigation = useNavigation();

  const animatedOpacity = useSharedValue(0);

  const withOpacityStyle = useAnimatedStyle(() => ({
    opacity: animatedOpacity.value,
  }));

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

  useEffect(() => {
    if (!isLoading) {
      animatedOpacity.value = withTiming(1, { duration: 500 });
    }
  }, [isLoading]);

  const handleNavigateToCarDetails = (car: CarDTO) => {
    navigation.navigate("CarDetails", { car });
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

          <CarsTotal style={withOpacityStyle}>
            Total de {cars.length} carros
          </CarsTotal>
        </HeaderContent>
      </Header>

      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <AnimatedCarsList
          style={withOpacityStyle}
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item: car }) => (
            <Car data={car} onPress={() => handleNavigateToCarDetails(car)} />
          )}
          ItemSeparatorComponent={CarsListSeparator}
        />
      )}
    </Container>
  );
};
