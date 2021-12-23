import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;

  height: ${RFValue(48)}px;
`;

export const Title = styled.Text`
  padding: 0 ${RFValue(30)}px;

  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
