import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.SafeAreaView`
  position: absolute;
  z-index: 5;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const CarImagesContainer = styled.SafeAreaView``;

export const CarImagesContent = styled.View`
  margin-top: ${RFValue(32)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { padding: RFValue(24), alignItems: "center" },
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

export const Acessories = styled.View`
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
