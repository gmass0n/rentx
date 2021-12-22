import { FC } from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { DefaultStackParamList } from "../../routes/DefaultStack";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

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
  Accessories,
  About,
  Footer,
} from "./styles";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type CarDetailsScreenRouteProp = RouteProp<DefaultStackParamList, "CarDetails">;

export const CarDetails: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<CarDetailsScreenRouteProp>();

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

      <Header>
        <HeaderContent>
          <BackButton />
        </HeaderContent>
      </Header>

      <CarImagesContainer>
        <CarImagesContent>
          <ImagesSlider urls={car.photos} />
        </CarImagesContent>
      </CarImagesContainer>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>

            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>

            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accesory) => (
            <Accessory
              key={accesory.type}
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
