import { FC } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";

import { Container, Header, Title, Subtitle, Footer } from "./styles";

export const SignIn: FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <Title>
          Estamos{"\n"}
          quase lá.
        </Title>

        <Subtitle>
          Faça seu login para começar{"\n"}
          uma experiência incrível.
        </Subtitle>
      </Header>

      <Footer>
        <Button
          title="Entrar"
          enabled={false}
          isLoading={false}
          style={{ marginBottom: RFValue(8) }}
        />

        <Button
          title="Criar conta"
          color="background_secondary"
          textColor="main"
        />
      </Footer>
    </Container>
  );
};
