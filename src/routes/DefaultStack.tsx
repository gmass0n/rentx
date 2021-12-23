import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

import { CarDTO } from "../dtos/CarDTO";

export type DefaultStackParamList = {
  Splash: undefined;
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute: keyof Omit<DefaultStackParamList, "Confirmation">;
  };
  MyCars: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: { name: string; driverLicense: string; email: string };
  };
};

const { Navigator, Screen } =
  createNativeStackNavigator<DefaultStackParamList>();

export const DefaultStack: FC = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />

      <Screen name="SignIn" component={SignIn} />

      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />

      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />

      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />

      <Screen name="CarDetails" component={CarDetails} />

      <Screen name="Scheduling" component={Scheduling} />

      <Screen name="SchedulingDetails" component={SchedulingDetails} />

      <Screen
        name="Confirmation"
        component={Confirmation}
        options={{ gestureEnabled: false }}
      />

      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};
