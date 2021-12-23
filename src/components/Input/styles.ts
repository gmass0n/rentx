import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TextInputProps {
  isPasswordInput: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  height: ${RFValue(48)}px;
  width: 100%;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;

  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  margin-right: ${RFValue(4)}px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;

  height: ${RFValue(48)}px;
  padding-left: ${RFValue(16)}px;
  padding-right: ${({ isPasswordInput }) =>
    isPasswordInput ? 0 : RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
`;

export const PasswordButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;

  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
