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
  password: string;
  passwordConfirmation: string;
}

export const SignUpSecondStep: FC = () => {
  const passwordConfirmationInputRef = useRef<TextInput>(null);

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
              <Bullet />

              <Bullet isActive />
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
              <Label>2. Senha</Label>

              <Input
                name="password"
                icon="lock"
                placeholder="Digite uma senha"
                secureTextEntry
                value={formData.password}
                onChangeValue={handelChangeValue}
                onSubmitEditing={() =>
                  passwordConfirmationInputRef.current?.focus()
                }
                returnKeyType="next"
                containerStyle={{ marginBottom: RFValue(8) }}
              />

              <Input
                name="passwordConfirmation"
                icon="lock"
                placeholder="Digite a senha novamente"
                secureTextEntry
                value={formData.passwordConfirmation}
                onChangeValue={handelChangeValue}
                returnKeyType="done"
                ref={passwordConfirmationInputRef}
                containerStyle={{ marginBottom: RFValue(16) }}
              />

              <Button
                title="Continuar"
                color="success"
                enabled={
                  Object.values(formData).length > 0
                    ? Object.values(formData).every((value) => !!value)
                    : false
                }
              />
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
