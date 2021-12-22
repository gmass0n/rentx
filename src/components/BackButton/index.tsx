import { FC } from "react";
import { Feather } from "@expo/vector-icons";
import { ThemeColorsKey, useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

interface BackButtonProps {
  color?: ThemeColorsKey;
}

export const BackButton: FC<BackButtonProps> = ({ color = "text" }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container onPress={navigation.goBack}>
      <Feather
        name="chevron-left"
        size={RFValue(20)}
        color={theme.colors[color]}
      />
    </Container>
  );
};
