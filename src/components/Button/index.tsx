import { FC } from "react";
import { ThemeColorsKey } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";
import { Spinner } from "../Spinner";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: ThemeColorsKey;
  textColor?: ThemeColorsKey;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  color = "main",
  textColor = "shape",
  isLoading,
  enabled = true,
  title,
  ...rest
}) => {
  return (
    <Container
      color={color}
      enabled={isLoading ? false : enabled}
      isDisabled={!enabled}
      {...rest}
    >
      {isLoading ? (
        <Spinner color={textColor} size="small" style={{ flex: 0 }} />
      ) : (
        <Title color={textColor}>{title}</Title>
      )}
    </Container>
  );
};
