import { FC } from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import {
  Container,
  LogoWrapper,
  ContentWrapper,
  Content,
  Title,
  Message,
  Footer,
  FooterContent,
} from "./styles";

export const SchedulingComplete: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoWrapper>
        <LogoSVG width={width} />
      </LogoWrapper>

      <ContentWrapper>
        <Content>
          <DoneSVG width={RFValue(70)} height={RFValue(70)} />

          <Title>Carro alugado</Title>

          <Message>
            Agora você só precisa ir{"\n"}
            até a concessionária da RENTX{"\n"}
            pegar o seu automóvel.
          </Message>
        </Content>

        <Footer>
          <FooterContent>
            <ConfirmButton title="OK" />
          </FooterContent>
        </Footer>
      </ContentWrapper>
    </Container>
  );
};
