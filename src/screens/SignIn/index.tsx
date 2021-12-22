import { FC } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Header, Title, Subtitle, Form, Footer } from "./styles";

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

      <Form>
        <Input
          icon="mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={{ marginBottom: RFValue(8) }}
        />

        <Input icon="lock" placeholder="Digite sua senha" secureTextEntry />
      </Form>

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
