import "styled-components";

import { theme } from "./theme";

declare module "styled-components" {
  export type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
