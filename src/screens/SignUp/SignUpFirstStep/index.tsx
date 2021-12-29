import { useNavigation } from "@react-navigation/native";
import { FC, useCallback, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

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
  driverLicense: string;
  email: string;
}

const formSchema = Yup.object().shape({
  name: Yup.string().required("Por favor, digite seu nome completo."),
  email: Yup.string()
    .email("Por favor, digite um e-mail válido.")
    .required("Por favor, digite um e-mail."),
  driverLicense: Yup.string()
    .required("Por favor, digite sua CNH.")
    .min(11, "Por favor, digite um CNH válido."),
});

export const SignUpFirstStep: FC = () => {
  const navigaton = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const driverLicenseInputRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState({} as FormData);

  const handelChangeValue = useCallback((text: string, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: text }));
  }, []);

  const handleSubmit = async () => {
    try {
      await formSchema.validate(formData);

      navigaton.navigate("SignUpSecondStep", { user: formData });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Ops, não foi possível continuar!", error.message);
      }
    }
  };

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
                autoCapitalize="none"
                returnKeyType="next"
                containerStyle={{ marginBottom: RFValue(8) }}
                onSubmitEditing={() => driverLicenseInputRef.current.focus()}
                ref={emailInputRef}
              />

              <Input
                name="driverLicense"
                icon="credit-card"
                placeholder="Digite sua CNH"
                value={formData.driverLicense}
                onChangeValue={handelChangeValue}
                containerStyle={{ marginBottom: RFValue(16) }}
                returnKeyType="done"
                keyboardType="numeric"
                maxLength={11}
                ref={driverLicenseInputRef}
                onSubmitEditing={handleSubmit}
              />

              <Button
                title="Continuar"
                onPress={handleSubmit}
                disabled={
                  Object.values(formData).length > 0
                    ? !Object.values(formData).every((value) => !!value)
                    : true
                }
              />
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
