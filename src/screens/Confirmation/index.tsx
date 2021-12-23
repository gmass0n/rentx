import { FC } from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { AppStackRoutesParamList } from "../../routes/AppStackRoutes";

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

type ConfirmationScreenRouteProp = RouteProp<
  AppStackRoutesParamList,
  "Confirmation"
>;

export const Confirmation: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<ConfirmationScreenRouteProp>();
  const { width } = useWindowDimensions();

  const { title, message, nextScreenRoute } = route.params || {};

  const handleNavigateToHome = () => {
    navigation.navigate(nextScreenRoute);
  };

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

          <Title>{title}</Title>

          <Message>{message}</Message>
        </Content>

        <Footer>
          <FooterContent>
            <ConfirmButton title="OK" onPress={handleNavigateToHome} />
          </FooterContent>
        </Footer>
      </ContentWrapper>
    </Container>
  );
};
