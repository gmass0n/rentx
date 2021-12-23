import { FC } from "react";
import { TouchableNativeFeedback } from "react-native";

import { Container, Title } from "./styles";

interface ConfirmButtonProps {
  title: string;
  onPress(): void;
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({ title, onPress }) => {
  return (
    <Container>
      <TouchableNativeFeedback onPress={onPress}>
        <Title>{title}</Title>
      </TouchableNativeFeedback>
    </Container>
  );
};
