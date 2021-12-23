import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

import { CarDTO } from "../dtos/CarDTO";

export type AppStackRoutesParamList = {
  Splash: undefined;
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute: keyof Omit<AppStackRoutesParamList, "Confirmation">;
  };
  MyCars: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<AppStackRoutesParamList>();

export const AppStackRoutes: FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Screen name="Home" component={Home} />

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
