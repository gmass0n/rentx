import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Platform, TouchableOpacity as RNTouchableOpacity } from "react-native";
import { TouchableOpacity as RNGestureHandlerTouchableOpacity } from "react-native-gesture-handler";

interface OptionProps {
  isActive: boolean;
}

interface OptionTitleProps {
  isActive: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  z-index: 5;
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

  margin-bottom: -${RFValue(104)}px;
`;

export const Avatar = styled.View`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(80)}px;
  border: ${({ theme }) => `${RFValue(2)}px solid ${theme.colors.shape}`};
  background: ${({ theme }) => theme.colors.shape};

  overflow: hidden;

  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(80)}px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  padding-top: ${RFValue(104)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  margin-bottom: ${RFValue(24)}px;
`;

export const Option = styled(
  Platform.OS === "ios" ? RNGestureHandlerTouchableOpacity : RNTouchableOpacity
)<OptionProps>`
  padding-bottom: ${RFValue(8)}px;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom-width: 3px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;

export const OptionTitle = styled.Text<OptionTitleProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme, isActive }) =>
    isActive ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.header : theme.colors.text_details};
`;

export const Form = styled.View``;
