import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AuthProvider } from "./auth";

export const AppProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
