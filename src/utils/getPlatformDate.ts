import { addDays } from "date-fns";
import { Platform } from "react-native";

export const getPlatformDate = (date: Date) =>
  Platform.OS === "ios" ? addDays(date, 1) : date;
