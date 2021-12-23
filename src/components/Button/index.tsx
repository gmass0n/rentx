import { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ThemeColorsKey } from "styled-components";

import { Container, Title } from "./styles";
import { Spinner } from "../Spinner";

export interface ButtonProps {
  title: string;
  color?: ThemeColorsKey;
  textColor?: ThemeColorsKey;
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress(): void;
}

export const Button: FC<ButtonProps> = ({
  color = "main",
  textColor = "shape",
  isLoading,
  disabled,
  title,
  containerStyle,
  onPress,
}) => {
  return (
    <Container
      color={color}
      isDisabled={disabled}
      style={containerStyle}
      enabled={isLoading ? false : !disabled}
      onPress={onPress}
    >
      {isLoading ? (
        <Spinner color={textColor} size="small" style={{ flex: 0 }} />
      ) : (
        <Title color={textColor}>{title}</Title>
      )}
    </Container>
  );
};
