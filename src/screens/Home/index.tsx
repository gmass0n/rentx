import { useNavigation } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
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

const AnimatedMyCarsButton = Animated.createAnimatedComponent(MyCarsButton);
const AnimatedCarsList = Animated.createAnimatedComponent(CarsList);

export const Home: FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);
  const animatedOpacity = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: positionX.value,
      },
      {
        translateY: positionY.value,
      },
    ],
  }));

  const withOpacityStyle = useAnimatedStyle(() => ({
    opacity: animatedOpacity.value,
  }));

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(ev, ctx: any) {
      if (ev.translationX) {
        positionX.value = ctx.positionX + ev.translationX;
      }

      if (ev.translationY) {
        positionY.value = ctx.positionY + ev.translationY;
      }
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

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

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedMyCarsButton
          onPress={handleNavigateToMyCars}
          style={myCarsButtonStyle}
        >
          <Ionicons
            name="ios-car-sport"
            size={RFValue(32)}
            color={theme.colors.shape}
          />
        </AnimatedMyCarsButton>
      </PanGestureHandler>
    </Container>
  );
};
