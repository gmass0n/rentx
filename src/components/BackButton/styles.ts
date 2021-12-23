import { Platform, TouchableOpacity as RNTouchableOpacity } from "react-native";
import { TouchableOpacity as RNGestureHandlerTouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(
  Platform.OS === "ios" ? RNGestureHandlerTouchableOpacity : RNTouchableOpacity
)``;
