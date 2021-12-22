import { FC } from "react";
import { ThemeColorsKey } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";
import { Spinner } from "../Spinner";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: ThemeColorsKey;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  color = "main",
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
        <Spinner color="shape" size="small" style={{ flex: 0 }} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};
