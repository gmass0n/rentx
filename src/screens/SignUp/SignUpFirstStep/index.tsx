import { FC, useCallback, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import {
  Container,
  Header,
  HeaderContent,
  Steps,
  Content,
  Title,
  Subtitle,
  Form,
  Label,
} from "./styles";

interface FormData {
  name: string;
  cnh: string;
  email: string;
}

export const SignUpFirstStep: FC = () => {
  const emailInputRef = useRef<TextInput>(null);
  const cnhInputRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState({} as FormData);

  const handelChangeValue = useCallback((text: string, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: text }));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <HeaderContent>
            <BackButton />

            <Steps>
              <Bullet isActive />

              <Bullet />
            </Steps>
          </HeaderContent>
        </Header>

        <KeyboardAvoidingView behavior="position" enabled>
          <Content>
            <Title>
              Crie sua{"\n"}
              conta.
            </Title>

            <Subtitle>
              Faça seu cadastro de{"\n"}
              forma rápida e fácil.
            </Subtitle>

            <Form>
              <Label>1. Dados</Label>

              <Input
                name="name"
                icon="user"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChangeValue={handelChangeValue}
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current.focus()}
                containerStyle={{ marginBottom: RFValue(8) }}
              />

              <Input
                name="email"
                icon="mail"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChangeValue={handelChangeValue}
                keyboardType="email-address"
                returnKeyType="next"
                containerStyle={{ marginBottom: RFValue(8) }}
                onSubmitEditing={() => cnhInputRef.current.focus()}
                ref={emailInputRef}
              />

              <Input
                name="cnh"
                icon="credit-card"
                placeholder="Digite sua CNH"
                value={formData.cnh}
                onChangeValue={handelChangeValue}
                containerStyle={{ marginBottom: RFValue(16) }}
                returnKeyType="done"
                keyboardType="numeric"
                ref={cnhInputRef}
              />

              <Button title="Continuar" />
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
