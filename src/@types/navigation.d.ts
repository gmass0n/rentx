import { DefaultStackParamList } from "../routes/DefaultStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DefaultStackParamList {}
  }
}
