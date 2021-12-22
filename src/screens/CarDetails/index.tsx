import { FC } from "react";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";

import {
  Container,
  Header,
  HeaderContent,
  CarImagesContainer,
  CarImagesContent,
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
    </Container>
  );
};
