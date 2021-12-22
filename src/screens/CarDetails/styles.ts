import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.SafeAreaView`
  position: absolute;
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
