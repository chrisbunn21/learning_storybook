import { Appearance, Size } from "../../design/types";
import { Layout } from "./styles";


interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  appearance?: Appearance;
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({appearance = Appearance.PRIMARY, size= Size.MEDIUM, label}: IButtonProps) => {
  return (
    <Layout type="button" appearance={appearance} size={size}>
      {label}
    </Layout>
  );
};
