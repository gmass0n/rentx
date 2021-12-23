import { FC } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import CarSVG from "../assets/car.svg";
import HomeSVG from "../assets/home.svg";
import PeopleSVG from "../assets/people.svg";

import { MyCars } from "../screens/MyCars";

import { AppStackRoutes } from "./AppStackRoutes";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { isIphoneX } from "react-native-iphone-x-helper";

export type AppTabRoutesParamList = {
  AppStack: undefined;
  Profile: undefined;
  MyCars: undefined;
};

const { Navigator, Screen } =
  createMaterialBottomTabNavigator<AppTabRoutesParamList>();

export const AppTabRoutes: FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      labeled={false}
      activeColor={theme.colors.main}
      inactiveColor={theme.colors.text_details}
      barStyle={{
        backgroundColor: theme.colors.background_primary,
        ...(isIphoneX()
          ? {
              paddingTop: RFValue(10),
              height: RFValue(76),
            }
          : {
              height: RFValue(50),
            }),
      }}
    >
      <Screen
        name="AppStack"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSVG height={RFValue(18)} width={RFValue(18)} fill={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSVG height={RFValue(18)} width={RFValue(18)} fill={color} />
          ),
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSVG height={RFValue(18)} width={RFValue(18)} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
};
