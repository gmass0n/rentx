import { useNavigation } from "@react-navigation/native";
import { FC, useEffect } from "react";
import { StatusBar } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

import BrandSVG from "../../assets/brand.svg";
import LogoSVG from "../../assets/logo.svg";

import { Container } from "./styles";

export const Splash: FC = () => {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
    transform: [
      {
        translateX: interpolate(splashAnimation.value, [0, 50], [0, -50]),
      },
    ],
    position: "absolute",
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [0, 1]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [-50, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
    position: "absolute",
  }));

  const startApp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, (isFinished) => {
      if (isFinished) {
        ("worklet");
        runOnJS(startApp)();
      }
    });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View style={brandStyle}>
        <BrandSVG width={92} height={60} />
      </Animated.View>

      <Animated.View style={logoStyle}>
        <LogoSVG width={180} height={20} />
      </Animated.View>
    </Container>
  );
};
