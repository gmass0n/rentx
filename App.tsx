import { FC } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";

export const App: FC = () => {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!isFontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
