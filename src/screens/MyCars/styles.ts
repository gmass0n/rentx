import { ComponentType } from "react";
import { FlatList } from "react-native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ScheduleByUserDTO } from "../../dtos/ScheduleByUserDTO";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
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
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(44)}px;

  margin-top: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(14)}px;

  margin-top: ${RFValue(24)}px;
`;

export const Content = styled.View`
  align-items: center;
  flex: 1;
`;

export const AppointmentsHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(14)}px;
`;

export const AppointmentsQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
`;

export const AppointmentsList = styled(
  FlatList as new () => FlatList<ScheduleByUserDTO>
).attrs({
  contentContainerStyle: {
    paddingHorizontal: RFValue(24),
    paddingBottom: isIphoneX() ? getBottomSpace() : RFValue(24),
  },
  showsVerticalScrollIndicator: false,
})`` as ComponentType as new () => FlatList<ScheduleByUserDTO>;

export const AppointmentsListSeparator = styled.View`
  margin-top: ${RFValue(12)}px;
`;
