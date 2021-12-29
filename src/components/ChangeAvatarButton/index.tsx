import { FC } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface ChangeAvatarButtonProps {
  onPress?(): void;
}

import { Container } from "./styles";

export const ChangeAvatarButton: FC<ChangeAvatarButtonProps> = ({
  onPress,
}) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <Feather name="camera" size={RFValue(24)} color={theme.colors.shape} />
    </Container>
  );
};
