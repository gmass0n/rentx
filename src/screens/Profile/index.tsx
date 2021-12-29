import { FC, useEffect, useRef, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

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
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

type CurrentOption = "editData" | "editPassword";

export const Profile: FC = () => {
  const theme = useTheme();

  const { user } = useAuth();

  const driverLicenseInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const newPasswordConfirmationInputRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState();
  const [currentOption, setCurrentOption] = useState<CurrentOption>("editData");

  const handleToggleCurrentOption = () => {
    setCurrentOption((prevState) =>
      prevState === "editData" ? "editPassword" : "editData"
    );
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

                <LogoutButton>
                  <Feather
                    name="power"
                    size={RFValue(17)}
                    color={theme.colors.shape}
                  />
                </LogoutButton>
              </HeaderTop>

              <AvatarContainer>
                <Avatar source={{ uri: "https://github.com/gmass0n.png" }} />

                <ChangeAvatarButton />
              </AvatarContainer>
            </HeaderContent>
          </Header>

          <Content>
            <Options>
              <Option
                isActive={currentOption === "editData"}
                onPress={handleToggleCurrentOption}
              >
                <OptionTitle isActive={currentOption === "editData"}>
                  Dados
                </OptionTitle>
              </Option>

              <Option
                isActive={currentOption === "editPassword"}
                onPress={handleToggleCurrentOption}
              >
                <OptionTitle isActive={currentOption === "editPassword"}>
                  Senha
                </OptionTitle>
              </Option>
            </Options>

            {currentOption === "editData" ? (
              <Form>
                <Input
                  icon="user"
                  name="name"
                  placeholder="Digite o seu nome"
                  containerStyle={{ marginBottom: RFValue(8) }}
                  defaultValue={user.name}
                  returnKeyType="next"
                  onSubmitEditing={() => driverLicenseInputRef.current.focus()}
                />

                <Input
                  icon="mail"
                  name="email"
                  editable={false}
                  containerStyle={{ marginBottom: RFValue(8) }}
                  defaultValue={user.email}
                />

                <Input
                  icon="credit-card"
                  name="driverLicense"
                  placeholder="Digite a sua CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                  ref={driverLicenseInputRef}
                  returnKeyType="done"
                  maxLength={11}
                />
              </Form>
            ) : (
              <Form>
                <Input
                  secureTextEntry
                  icon="lock"
                  placeholder="Digite sua senha atual"
                  containerStyle={{ marginBottom: RFValue(8) }}
                  returnKeyType="next"
                  onSubmitEditing={() => newPasswordInputRef.current.focus()}
                />

                <Input
                  secureTextEntry
                  icon="lock"
                  placeholder="Digite uma nova senha"
                  containerStyle={{ marginBottom: RFValue(8) }}
                  editable
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    newPasswordConfirmationInputRef.current.focus()
                  }
                  ref={newPasswordInputRef}
                />

                <Input
                  secureTextEntry
                  icon="lock"
                  placeholder="Confirme sua nova senha"
                  returnKeyType="done"
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
