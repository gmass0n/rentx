import { FC } from "react";

import { Container, Title } from "./styles";

interface ConfirmButtonProps {
  title: string;
  onPress(): void;
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};
