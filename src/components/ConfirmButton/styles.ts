import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  padding: ${RFValue(18)}px ${RFValue(30)}px;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;