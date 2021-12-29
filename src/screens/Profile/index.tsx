import { FC, useCallback, useRef, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { ChangeAvatarButton } from "../../components/ChangeAvatarButton";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  HeaderContent,
  HeaderTop,
  Title,
  LogoutButton,
  AvatarContainer,
  Avatar,
  AvatarImage,
  Content,
  Options,
  Option,
  OptionTitle,
  Form,
} from "./styles";

type CurrentOption = "dataForm" | "changePasswordForm";

interface FormData {
  avatar: string;
  name: string;
  email: string;
  driverLicense: string;
  currentPassword: string;
  newPassword: string;
  newPassordConfirmation: string;
}

const dataFormSchema = Yup.object().shape({
  name: Yup.string().required("Por favor, digite seu nome completo."),
  driverLicense: Yup.string()
    .required("Por favor, digite sua CNH.")
    .min(11, "Por favor, digite um CNH válido."),
});

export const Profile: FC = () => {
  const theme = useTheme();

  const { user, signOut, updateUser } = useAuth();

  const driverLicenseInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const newPasswordConfirmationInputRef = useRef<TextInput>(null);

  const [currentOption, setCurrentOption] = useState<CurrentOption>("dataForm");
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [formData, setFormData] = useState({
    avatar: user.avatar || null,
    driverLicense: user.driver_license,
    email: user.email,
    name: user.name,
  } as FormData);

  const handleToggleCurrentOption = () => {
    setCurrentOption((prevState) =>
      prevState === "dataForm" ? "changePasswordForm" : "dataForm"
    );
  };

  const handeChangeAvatar = async (): Promise<void> => {
    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) return;

    setFormData((prevState) => ({ ...prevState, avatar: result.uri }));
  };

  const handleChangeValue = useCallback((value: string, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleUpdateProfile = async () => {
    try {
      setIsUpdatingProfile(true);

      await dataFormSchema.validate(formData);

      await updateUser({
        avatar: formData.avatar,
        driver_license: formData.driverLicense,
        name: formData.name,
      });

      Alert.alert("Boa, seu perfil foi alterado com sucesso!");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(
          "Ops, não foi possível salvar as alterações!",
          error.message
        );

        return;
      }

      Alert.alert(
        "Ops, não foi possível atualizar o perfil!",
        "Ocorreu um erro inesperado ao atualizar o seu perfil, verifique as credenciais e tente novamente."
      );
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />

          <Header>
            <HeaderContent>
              <HeaderTop>
                <LogoutButton />

                <Title>Perfil</Title>

                <LogoutButton onPress={signOut}>
                  <Feather
                    name="power"
                    size={RFValue(17)}
                    color={theme.colors.shape}
                  />
                </LogoutButton>
              </HeaderTop>

              <AvatarContainer>
                <Avatar>
                  {!!formData.avatar && (
                    <AvatarImage source={{ uri: formData.avatar }} />
                  )}
                </Avatar>

                <ChangeAvatarButton onPress={handeChangeAvatar} />
              </AvatarContainer>
            </HeaderContent>
          </Header>

          <Content>
            <Options>
              <Option
                isActive={currentOption === "dataForm"}
                onPress={handleToggleCurrentOption}
              >
                <OptionTitle isActive={currentOption === "dataForm"}>
                  Dados
                </OptionTitle>
              </Option>

              <Option
                isActive={currentOption === "changePasswordForm"}
                onPress={handleToggleCurrentOption}
              >
                <OptionTitle isActive={currentOption === "changePasswordForm"}>
                  Trocar senha
                </OptionTitle>
              </Option>
            </Options>

            {currentOption === "dataForm" ? (
              <Form>
                <Input
                  icon="user"
                  name="name"
                  placeholder="Digite o seu nome"
                  containerStyle={{ marginBottom: RFValue(8) }}
                  value={formData.name}
                  onChangeValue={handleChangeValue}
                  returnKeyType="next"
                  onSubmitEditing={() => driverLicenseInputRef.current.focus()}
                />

                <Input
                  icon="mail"
                  name="email"
                  editable={false}
                  containerStyle={{ marginBottom: RFValue(8) }}
                  value={formData.email}
                  onChangeValue={handleChangeValue}
                />

                <Input
                  icon="credit-card"
                  name="driverLicense"
                  placeholder="Digite a sua CNH"
                  keyboardType="numeric"
                  value={formData.driverLicense}
                  ref={driverLicenseInputRef}
                  returnKeyType="done"
                  maxLength={11}
                  onChangeValue={handleChangeValue}
                  containerStyle={{ marginBottom: RFValue(16) }}
                />

                <Button
                  title="Salvar alterações"
                  onPress={handleUpdateProfile}
                  isLoading={isUpdatingProfile}
                />
              </Form>
            ) : (
              <Form>
                <Input
                  name="currentPassword"
                  secureTextEntry
                  icon="lock"
                  placeholder="Digite sua senha atual"
                  containerStyle={{ marginBottom: RFValue(8) }}
                  returnKeyType="next"
                  onSubmitEditing={() => newPasswordInputRef.current.focus()}
                  onChangeValue={handleChangeValue}
                />

                <Input
                  name="newPassword"
                  secureTextEntry
                  icon="lock"
                  placeholder="Digite uma nova senha"
                  containerStyle={{ marginBottom: RFValue(8) }}
                  editable
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    newPasswordConfirmationInputRef.current.focus()
                  }
                  onChangeValue={handleChangeValue}
                  ref={newPasswordInputRef}
                />

                <Input
                  name="newPasswordConfirmation"
                  secureTextEntry
                  icon="lock"
                  placeholder="Confirme sua nova senha"
                  returnKeyType="done"
                  onChangeValue={handleChangeValue}
                  ref={newPasswordConfirmationInputRef}
                />
              </Form>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
