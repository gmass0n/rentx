import { FC, useCallback, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Header, Title, Subtitle, Form, Footer } from "./styles";

interface FormData {
  email: string;
  password: string;
}

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, digite um e-mail válido.")
    .required("Por favor, digite um e-mail."),
  password: Yup.string().required("Por favor, digite uma senha."),
});

export const SignIn: FC = () => {
  const passwordInputRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState({} as FormData);
  const [isSigning, setIsSigning] = useState(false);

  const handelChangeValue = useCallback((text: string, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: text }));
  }, []);

  const handleSignIn = async () => {
    try {
      setIsSigning(true);

      await formSchema.validate(formData, { abortEarly: false });
    } catch (error) {
      setIsSigning(false);

      if (error instanceof Yup.ValidationError) {
        Alert.alert(
          "Ops, não foi possível entrar com a sua conta!",
          error.message
        );
        return;
      }

      Alert.alert(
        "Ops, não foi possível entrar com a sua conta!",
        "Ocorreu um erro inesperado ao entrar com a sua conta, verifique as credenciais e tente novamente."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              value={formData.email}
              name="email"
              onChangeValue={handelChangeValue}
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <Input
              icon="lock"
              placeholder="Digite sua senha"
              secureTextEntry
              value={formData.password}
              name="password"
              onChangeValue={handelChangeValue}
              ref={passwordInputRef}
            />
          </Form>

          <Footer>
            <Button
              title="Entrar"
              enabled={!!formData.email && !!formData.password}
              isLoading={isSigning}
              onPress={handleSignIn}
              style={{ marginBottom: RFValue(8) }}
            />

            <Button
              title="Criar conta"
              color="background_secondary"
              textColor="main"
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
