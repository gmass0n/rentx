import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  z-index: 5;
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(36)}px;

  margin-bottom: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
`;

export const Content = styled.View`
  padding: ${RFValue(24)}px;
  padding-top: 0;
`;

export const Form = styled.View`
  margin-top: ${RFValue(64)}px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(16)}px;

  margin-bottom: ${RFValue(24)}px;
`;
