import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(95)}px;
  height: ${RFValue(95)}px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: ${RFValue(14)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(11)}px;

  margin-top: ${RFValue(7)}px;
`;
