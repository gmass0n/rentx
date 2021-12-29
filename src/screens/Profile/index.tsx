import { FC, useEffect, useRef, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { ChangeAvatarButton } from "../../components/ChangeAvatarButton";

import {
  Container,
  Header,
  HeaderContent,
  HeaderTop,
  Title,
  LogoutButton,
  AvatarContainer,
  Avatar,
  Content,
  Options,
  Option,
  OptionTitle,
  Form,
} from "./styles";
import { useCallback } from "react";

type CurrentOption = "dataForm" | "passwordForm";

interface FormData {
  avatar: string;
  name: string;
  email: string;
  driverLicense: string;
  currentPassword: string;
  newPassword: string;
  newPassordConfirmation: string;
}

export const Profile: FC = () => {
  const theme = useTheme();

  const { user } = useAuth();

  const driverLicenseInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const newPasswordConfirmationInputRef = useRef<TextInput>(null);

  const [currentOption, setCurrentOption] = useState<CurrentOption>("dataForm");
  const [formData, setFormData] = useState({
    avatar: user.avatar || null,
    driverLicense: user.driver_license,
    email: user.email,
    name: user.name,
  } as FormData);

  const handleToggleCurrentOption = () => {
    setCurrentOption((prevState) =>
      prevState === "dataForm" ? "passwordForm" : "dataForm"
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

                <LogoutButton>
                  <Feather
                    name="power"
                    size={RFValue(17)}
                    color={theme.colors.shape}
                  />
                </LogoutButton>
              </HeaderTop>

              <AvatarContainer>
                {!!formData.avatar && (
                  <Avatar source={{ uri: formData.avatar }} />
                )}

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
                isActive={currentOption === "passwordForm"}
                onPress={handleToggleCurrentOption}
              >
                <OptionTitle isActive={currentOption === "passwordForm"}>
                  Senha
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
