import { AuthStackRoutesParamList } from "../routes/AuthStackRoutes";
import { AppStackRoutesParamList } from "../routes/AppStackRoutes";
import { AppTabRoutesParamList } from "../routes/AppTabRoutes";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackRoutesParamList,
        AppTabRoutesParamList,
        AppStackRoutesParamList {}
  }
}
