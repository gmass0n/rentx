import { FC } from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { ThemeColorsKey, useTheme } from "styled-components";

interface SpinnerProps extends ActivityIndicatorProps {
  color?: ThemeColorsKey;
}

export const Spinner: FC<SpinnerProps> = ({
  color = "main",
  size = "large",
  ...rest
}) => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.colors[color]}
      size={size}
      style={{ flex: 1 }}
      {...rest}
    />
  );
};
