import { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../styles/theme";

import { Container } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: keyof typeof theme.colors;
}

export const BackButton: FC<BackButtonProps> = ({
  color = "text",
  ...rest
}) => {
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={RFValue(24)}
        color={theme.colors[color]}
      />
    </Container>
  );
};
