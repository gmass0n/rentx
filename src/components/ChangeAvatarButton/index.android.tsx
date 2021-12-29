import { FC } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TouchableNativeFeedback } from "react-native";

interface ChangeAvatarButtonProps {
  onPress?(): void;
}

import { Container } from "./styles";

export const ChangeAvatarButton: FC<ChangeAvatarButtonProps> = ({
  onPress,
}) => {
  const theme = useTheme();

  return (
    <Container rippleColor="transparent">
      <TouchableNativeFeedback onPress={onPress}>
        <Feather name="camera" size={RFValue(20)} color={theme.colors.shape} />
      </TouchableNativeFeedback>
    </Container>
  );
};
