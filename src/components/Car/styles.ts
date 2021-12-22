import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const Details = styled.View``;

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
  font-size: ${RFValue(14)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(14)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  margin-bottom: ${RFValue(4)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(14)}px;
`;

export const Type = styled.View``;

export const Picture = styled.Image`
  width: ${RFValue(165)}px;
  height: ${RFValue(85)}px;
`;
