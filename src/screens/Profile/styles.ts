import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Platform, TouchableOpacity as RNTouchableOpacity } from "react-native";
import { TouchableOpacity as RNGestureHandlerTouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const HeaderTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: ${RFValue(32)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(20)}px;
`;

export const LogoutButton = styled(
  Platform.OS === "ios" ? RNGestureHandlerTouchableOpacity : RNTouchableOpacity
)`
  width: ${RFValue(17)}px;
  height: ${RFValue(17)}px;
`;

export const AvatarContainer = styled.View`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(80)}px;

  background: ${({ theme }) => theme.colors.shape};
  margin-bottom: -${RFValue(104)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(80)}px;
`;
