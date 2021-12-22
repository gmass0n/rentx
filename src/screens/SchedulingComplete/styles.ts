import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${RFValue(96)}px;
`;

export const LogoWrapper = styled.SafeAreaView`
  position: absolute;
`;

export const ContentWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  justify-content: center;
  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};

  text-align: center;

  margin-top: ${RFValue(24)}px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;

  margin-top: ${RFValue(24)}px;
`;

export const Footer = styled.SafeAreaView`
  width: 100%;
`;

export const FooterContent = styled.View`
  width: 100%;
  align-items: center;

  padding: 0 ${RFValue(24)}px ${RFValue(24)}px;
`;
