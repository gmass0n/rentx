import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateInfoProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  justify-content: space-between;

  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(42)}px;

  margin-top: ${RFValue(24)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(24)}px;
`;

export const DateInfo = styled.View<DateInfoProps>`
  width: 30%;

  ${({ isSelected, theme }) =>
    !isSelected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `};
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    padding: RFValue(24),
    justifyContent: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 0 ${RFValue(24)}px ${isIphoneX() ? getBottomSpace() : RFValue(24)}px;
`;
