import { FC } from "react";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import {
  Container,
  Header,
  HeaderContent,
  HeaderTop,
  Title,
  LogoutButton,
  AvatarContainer,
  Avatar,
} from "./styles";
import { ChangeAvatarButton } from "../../components/ChangeAvatarButton";

export const Profile: FC = () => {
  const theme = useTheme();

  return (
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
    </Container>
  );
};
