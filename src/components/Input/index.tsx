import { FC, ComponentProps, useState } from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { Container, IconContainer, TextInput, PasswordButton } from "./styles";

export interface InputProps extends TextInputProps {
  icon: ComponentProps<typeof Feather>["name"];
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input: FC<InputProps> = ({
  icon,
  containerStyle,
  secureTextEntry,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const theme = useTheme();

  const toggleIsPasswordVisible = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container style={containerStyle}>
      <IconContainer>
        <Feather name={icon} size={RFValue(18)} color={theme.colors.main} />
      </IconContainer>

      <TextInput
        placeholderTextColor={theme.colors.text_details}
        autoCorrect={false}
        secureTextEntry={secureTextEntry ? !isPasswordVisible : false}
        isPasswordInput={secureTextEntry}
        {...rest}
      />

      {secureTextEntry && (
        <PasswordButton onPress={toggleIsPasswordVisible}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={RFValue(18)}
            color={theme.colors.main}
          />
        </PasswordButton>
      )}
    </Container>
  );
};
