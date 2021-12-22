import { FC } from "react";
import LottieView from "lottie-react-native";
import { RFValue } from "react-native-responsive-fontsize";

import loadingCar from "../../assets/loading_car.json";

import { Container } from "./styles";

export const AnimatedLoading: FC = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        loop
        style={{ height: RFValue(250) }}
        resizeMode="contain"
      />
    </Container>
  );
};
