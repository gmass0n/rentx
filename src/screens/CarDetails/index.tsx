import { FC } from "react";

import { BackButton } from "../../components/BackButton";

import { Container, Header, HeaderContent } from "./styles";

export const CarDetails: FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackButton onPress={() => null} />
        </HeaderContent>
      </Header>
    </Container>
  );
};
