import { LinkContainer } from "./styles";

export type Props = {
  type: "button" | "link";
  children: string;
  title?: string;
  to?: string;
  onClick?: () => void;
};

const Button = ({ children, type, to, onClick, title }: Props) => {
  return (
    <LinkContainer type="link" title={title} to={to} onClick={onClick}>
      {children}
    </LinkContainer>
  );
};

export default Button;
