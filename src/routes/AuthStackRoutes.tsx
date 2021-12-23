import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Confirmation } from "../screens/Confirmation";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

export type AuthStackRoutesParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: { name: string; driverLicense: string; email: string };
  };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute: keyof Omit<AuthStackRoutesParamList, "Confirmation">;
  };
};

const { Navigator, Screen } =
  createNativeStackNavigator<AuthStackRoutesParamList>();

export const AuthStackRoutes: FC = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />

      <Screen name="SignIn" component={SignIn} />

      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />

      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />

      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
};
