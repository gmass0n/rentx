import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.SafeAreaView`
  position: absolute;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const CarImagesContainer = styled.SafeAreaView``;

export const CarImagesContent = styled.View`
  margin-top: ${RFValue(32)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { padding: RFValue(24), alignItems: "center" },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(20)}px;
`;

export const Acessories = styled.View`
  width: 100%;
  margin-top: ${RFValue(24)}px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(24)}px;
  padding-bottom: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIconBackground = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
`;

export const RentalPrice = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const RentalPriceLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const RentalPriceQuota = styled.View``;

export const RentalPriceQuotaTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  margin-bottom: ${RFValue(4)}px;
`;

export const RentalPriceQuotaValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(24)}px;
`;

export const Footer = styled.View`
  padding: ${RFValue(24)}px ${RFValue(24)}px
    ${isIphoneX() ? getBottomSpace() : RFValue(24)}px;
`;
