import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const SCREEN_FULL_WIDTH = Dimensions.get("window").width;

interface ImageIndexProps {
  isActive: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: ${RFValue(24)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.title : theme.colors.shape};

  margin-left: ${RFValue(8)}px;
`;

export const CarImageWrapper = styled.View`
  width: ${SCREEN_FULL_WIDTH}px;
  height: ${RFValue(132)}px;

  align-items: center;
  justify-content: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;