import { FC } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SpeedSVG from "../../assets/speed.svg";
import AccelerationSVG from "../../assets/acceleration.svg";
import ForceSVG from "../../assets/force.svg";
import GasolineSVG from "../../assets/gasoline.svg";
import ExchangeSVG from "../../assets/exchange.svg";
import PeopleSVG from "../../assets/people.svg";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import { Acessory } from "../../components/Acessory";
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
  Acessories,
  About,
  Footer,
} from "./styles";

export const CarDetails: FC = () => {
  const navigation = useNavigation();

  const handleNavigateToScheduling = () => {
    navigation.navigate("Scheduling");
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
          <Acessory name="380Km/h" icon={SpeedSVG} />

          <Acessory name="3.2s" icon={AccelerationSVG} />

          <Acessory name="800 HP" icon={ForceSVG} />

          <Acessory name="Gasolina" icon={GasolineSVG} />

          <Acessory name="Auto" icon={ExchangeSVG} />

          <Acessory name="2 Pessoas" icon={PeopleSVG} />
        </Acessories>

        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quod
          sequi quisquam eos hic exercita tionem quisquam eos hic
        </About>
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
