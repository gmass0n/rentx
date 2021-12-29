import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, Platform, StatusBar } from "react-native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import { ComponentType } from "react";
import Animated from "react-native-reanimated";

import { CarDTO } from "../../dtos/CarDTO";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.SafeAreaView`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: ${RFValue(24)}px;
  padding-top: ${StatusBar.currentHeight + RFValue(24)}px;
`;

export const CarsTotal = styled(Animated.Text)`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarsList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: RFValue(24),
    paddingBottom: isIphoneX() ? getBottomSpace() : RFValue(24),
  },
  showsVerticalScrollIndicator: false,
})`` as ComponentType as new () => FlatList<CarDTO>;

export const CarsListSeparator = styled.View`
  margin-top: ${RFValue(8)}px;
`;
