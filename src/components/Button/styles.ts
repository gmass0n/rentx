import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ThemeColorsKey } from "styled-components";
import styled from "styled-components/native";
import { theme } from "../../styles/theme";

interface ContainerProps {
  color: ThemeColorsKey;
  isDisabled: boolean;
}

interface TitleProps {
  color: ThemeColorsKey;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  padding: ${RFValue(18)}px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors[color]};

  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, color }) => theme.colors[color]};
`;
