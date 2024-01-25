import { styled } from "styled-components";
import { setColor, toRem } from "design/utils";
import { theme } from "design/theme";
import { Appearance, Size } from "design/types";

interface ILayoutProps {
  appearance?: Appearance;
  size?: Size;
}

const setSize = (size?: Size) => {
  switch (size) {
    case Size.MEDIUM:
      return `font-size: ${toRem(theme.font.size.medium)};`;
    case Size.LARGE:
      return `font-size: ${toRem(theme.font.size.large)};`;
    default:
      return `font-size: ${toRem(theme.font.size.small)};`;
  }
};

export const Layout = styled.button<Partial<ILayoutProps>>`
  display: inline-block;
  background-color: ${(props) => setColor(props.appearance)};
  border: ${toRem(0)};
  border-radius: ${toRem(3)};
  color: ${theme.color.white};
  cursor: pointer;
  font-weight: 700;
  padding: ${toRem(11)} ${toRem(20)};
  ${(props) => setSize(props.size)};
`;
