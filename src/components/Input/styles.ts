import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IconContainerProps {
  isFocused: boolean;
}
interface TextInputProps {
  isPasswordInput: boolean;
  isFocused: boolean;
}

interface PasswordButtonContentProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  height: ${RFValue(44)}px;
  width: 100%;
`;

export const IconContainer = styled.View<IconContainerProps>`
  align-items: center;
  justify-content: center;

  height: ${RFValue(44)}px;
  width: ${RFValue(44)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  margin-right: ${RFValue(4)}px;

  border-top-width: ${RFValue(2)}px;
  border-top-color: ${({ theme }) => theme.colors.background_secondary};

  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main : theme.colors.background_secondary};
`;

export const StyledTextInput = styled.TextInput<TextInputProps>`
  flex: 1;

  height: ${RFValue(44)}px;
  padding-left: ${RFValue(16)}px;
  padding-right: ${({ isPasswordInput }) =>
    isPasswordInput ? 0 : RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;

  border-top-width: ${RFValue(2)}px;
  border-top-color: ${({ theme }) => theme.colors.background_secondary};

  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main : theme.colors.background_secondary};
`;

export const PasswordButtonContent = styled.View<PasswordButtonContentProps>`
  align-items: center;
  justify-content: center;

  height: ${RFValue(44)}px;
  width: ${RFValue(44)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  border-top-width: ${RFValue(2)}px;
  border-top-color: ${({ theme }) => theme.colors.background_secondary};

  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main : theme.colors.background_secondary};
`;
