import { FC } from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { DefaultStackParamList } from "../../routes/DefaultStack";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import {
  Container,
  AnimatedHeader,
  Header,
  CarImagesContent,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  About,
  Footer,
} from "./styles";

type CarDetailsScreenRouteProp = RouteProp<DefaultStackParamList, "CarDetails">;

export const CarDetails: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<CarDetailsScreenRouteProp>();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const haderStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [265, 115], Extrapolate.CLAMP),
  }));

  const imagesSliderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 150], [1, 0]),
  }));

  const { car } = route.params;

  const handleNavigateToScheduling = () => {
    navigation.navigate("Scheduling", { car });
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <AnimatedHeader style={haderStyle}>
        <Header>
          <BackButton />
        </Header>

        <CarImagesContent style={imagesSliderStyle}>
          <ImagesSlider photos={car.photos} />
        </CarImagesContent>
      </AnimatedHeader>

      <Content onScroll={scrollHandler} scrollEventThrottle={16}>
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

        <Accessories>
          {car.accessories.map((accesory) => (
            <Accessory
              key={accesory.id}
              name={accesory.name}
              icon={getAccessoryIcon(accesory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleNavigateToScheduling}
        />
      </Footer>
    </Container>
  );
};
