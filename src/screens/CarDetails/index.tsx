import React, { FC } from "react";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";

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
  About,
} from "./styles";

export const CarDetails: FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackButton onPress={() => null} />
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

        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quod
          sequi quisquam eos hic exercita tionem quisquam eos hic
        </About>
      </Content>
    </Container>
  );
};
