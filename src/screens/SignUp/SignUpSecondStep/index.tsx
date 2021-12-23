import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
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

import { DefaultStackParamList } from "../../../routes/DefaultStack";

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

type SignUpSecondStepScreenRouteProp = RouteProp<
  DefaultStackParamList,
  "SignUpSecondStep"
>;

const formSchema = Yup.object().shape({
  password: Yup.string().required("Por favor, digite uma senha."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas precisam ser iguais."
  ),
});

export const SignUpSecondStep: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<SignUpSecondStepScreenRouteProp>();

  const passwordConfirmationInputRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState({} as FormData);
  const [isSignuping, setIsSignuping] = useState(false);

  const handelChangeValue = useCallback((text: string, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: text }));
  }, []);

  const handleSignUp = async () => {
    try {
      setIsSignuping(true);

      await formSchema.validate(formData, { abortEarly: false });

      setIsSignuping(false);
      console.log(route.params.user);

      navigation.navigate("Confirmation", {
        title: "Conta criada!",
        message: `Agora é so entrar com a sua conta\ne aproveitar!`,
        nextScreenRoute: "SignIn",
      });
    } catch (error) {
      setIsSignuping(false);

      if (error instanceof Yup.ValidationError) {
        if (error instanceof Yup.ValidationError) {
          Alert.alert(
            "Ops, não foi possível continuar!",
            error.inner[0].message
          );
          return;
        }

        Alert.alert(
          "Ops, não foi possível criar sua conta!",
          "Ocorreu um erro inesperado ao criar sua conta, verifique os campos e tente novamente."
        );
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
                onSubmitEditing={handleSignUp}
              />

              <Button
                title="Criar conta"
                color="success"
                onPress={handleSignUp}
                isLoading={isSignuping}
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
