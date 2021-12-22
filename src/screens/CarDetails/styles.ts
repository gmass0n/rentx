import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {
  isIphoneX,
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const AnimatedHeader = styled(Animated.View)`
  position: absolute;
  overflow: hidden;
  z-index: 5;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 10;

  padding: ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight(true) + RFValue(24)}px;
`;

export const CarImagesContent = styled(Animated.View)`
  margin-top: ${getStatusBarHeight(true) + RFValue(32)}px;
`;

export const Content = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    padding: RFValue(24),
    paddingBottom: 0,
    paddingTop: RFValue(24) + 265,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(20)}px;
`;

export const Accessories = styled.View`
  width: 100%;
  margin-top: ${RFValue(24)}px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;

  text-align: justify;

  margin-top: ${RFValue(24)}px;
`;

export const Footer = styled.View`
  padding: ${RFValue(24)}px ${RFValue(24)}px
    ${isIphoneX() ? getBottomSpace() : RFValue(24)}px;
`;
