import { eachDayOfInterval, format } from "date-fns";
import { DateData } from "react-native-calendars/src/types";

import { MarkedDateProps } from "../components/Calendar";

import { theme } from "../styles/theme";

import { getPlatformDate } from "./getPlatformDate";

export const generateCalendarInterval = (start: DateData, end: DateData) => {
  let interval = {} as MarkedDateProps;

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval[date] = {
      color:
        start.dateString === date || end.dateString === date
          ? theme.colors.main
          : theme.colors.main_light,
      textColor:
        start.dateString === date || end.dateString === date
          ? theme.colors.main_light
          : theme.colors.main,
    };
  });

  return interval;
};
