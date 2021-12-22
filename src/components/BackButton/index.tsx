import { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { ThemeColorsKey, useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { Container } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: ThemeColorsKey;
}

export const BackButton: FC<BackButtonProps> = ({
  color = "text",
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={RFValue(24)}
        color={colors[color]}
      />
    </Container>
  );
};
