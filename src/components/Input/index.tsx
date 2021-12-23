import {
  FC,
  ComponentProps,
  useState,
  useEffect,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { BorderlessButton } from "react-native-gesture-handler";

import {
  Container,
  IconContainer,
  StyledTextInput,
  PasswordButtonContent,
} from "./styles";

export interface InputProps extends TextInputProps {
  icon: ComponentProps<typeof Feather>["name"];
  containerStyle?: StyleProp<ViewStyle>;
  onChangeValue?(value: string, name: string): void;
  name?: string;
}

const BaseInput: ForwardRefRenderFunction<TextInput, InputProps> = (
  {
    icon,
    containerStyle,
    secureTextEntry,
    onFocus = () => null,
    onBlur = () => null,
    onChangeValue = () => null,
    name,
    value,
    ...rest
  },
  ref: any
) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    if (!isFilled && value) {
      setIsFilled(true);
    } else if (isFilled && !value) {
      setIsFilled(false);
    }
  }, [isFilled, value]);

  const toggleIsPasswordVisible = () => {
    ref.current?.focus();
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    setIsFocused(true);
    onFocus(event);
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur(event);
  };

  return (
    <Container style={containerStyle}>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={icon}
          size={RFValue(18)}
          color={
            isFocused || isFilled
              ? theme.colors.main
              : theme.colors.text_details
          }
        />
      </IconContainer>

      <StyledTextInput
        isFocused={isFocused}
        placeholderTextColor={theme.colors.text_details}
        autoCorrect={false}
        secureTextEntry={secureTextEntry ? !isPasswordVisible : false}
        isPasswordInput={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(text) => onChangeValue(text, name)}
        value={value}
        ref={ref}
        {...rest}
      />

      {secureTextEntry && (
        <BorderlessButton onPress={toggleIsPasswordVisible}>
          <PasswordButtonContent isFocused={isFocused}>
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={RFValue(18)}
              color={
                isFocused || isFilled
                  ? theme.colors.main
                  : theme.colors.text_details
              }
            />
          </PasswordButtonContent>
        </BorderlessButton>
      )}
    </Container>
  );
};

export const Input = forwardRef(BaseInput);
