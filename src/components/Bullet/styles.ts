import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.title : theme.colors.shape};

  margin-left: ${RFValue(8)}px;
`;
