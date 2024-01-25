import { theme } from "./theme";
import { Appearance } from "./types";

export const toRem: (n: number) => string = (n: number) => `${n / 16}rem`;

export const setColor = (appearance?: Appearance) => {
  switch (appearance) {
    case Appearance.PRIMARY:
      return theme.color.primary;
    case Appearance.SECONDARY:
      return theme.color.secondary;
    case Appearance.DANGER:
      return theme.color.danger;
    default:
      return theme.color.primary;
  }
};
