import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(36)}px;

  margin-bottom: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
`;

export const Form = styled.View`
  width: 100%;

  margin: ${RFValue(24)}px 0;
`;

export const Footer = styled.View`
  width: 100%;
`;
