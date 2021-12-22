import { FC } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Calendar as RNCalendar,
  CalendarProps,
  LocaleConfig,
} from "react-native-calendars";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { StyleSheet } from "react-native";
import { ptBR } from "../../configs/locale";

LocaleConfig.locales["pt_BR"] = ptBR;
LocaleConfig.defaultLocale = "pt_BR";

export type MarkedDateProps = CalendarProps["markedDates"];

export const Calendar: FC<CalendarProps> = ({ ...rest }) => {
  const theme = useTheme();

  return (
    <RNCalendar
      renderArrow={(direction) => (
        <Feather
          size={RFValue(20)}
          color={theme.colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: RFValue(10),
        marginBottom: RFValue(10),
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textMonthFontFamily: theme.fonts.secondary_600,
        textDayHeaderFontSize: RFValue(10),
        textMonthFontSize: RFValue(18),
        monthTextColor: theme.colors.title,
        todayTextColor: theme.colors.main,
        arrowStyle: {
          marginHorizontal: RFValue(-14),
        },
      }}
      firstDay={1}
      minDate={new Date().toString()}
      markingType="period"
      {...rest}
    />
  );
};
