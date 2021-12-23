import { FC } from "react";
import { TouchableNativeFeedback } from "react-native";

import { Container, Content, Title } from "./styles";
import { Spinner } from "../Spinner";

import { ButtonProps } from "./index";

export const Button: FC<ButtonProps> = ({
  color = "main",
  textColor = "shape",
  isLoading,
  disabled,
  title,
  containerStyle,
  ...rest
}) => {
  return (
    <Container color={color} isDisabled={disabled} style={containerStyle}>
      <TouchableNativeFeedback disabled={isLoading || disabled} {...rest}>
        <Content>
          {isLoading ? (
            <Spinner color={textColor} size="small" style={{ flex: 0 }} />
          ) : (
            <Title color={textColor}>{title}</Title>
          )}
        </Content>
      </TouchableNativeFeedback>
    </Container>
  );
};
