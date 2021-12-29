import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.main};
  height: ${RFValue(36)}px;
  width: ${RFValue(36)}px;

  position: absolute;
  bottom: ${RFValue(4)}px;
  right: ${RFValue(4)}px;
`;
