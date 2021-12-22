import { FC } from "react";
import { ThemeColorsKey } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: ThemeColorsKey;
}

export const Button: FC<ButtonProps> = ({ color = "main", title, ...rest }) => {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
