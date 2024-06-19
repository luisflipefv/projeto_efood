import { AddContainer, ButtonContainer, LinkContainer } from "./styles";

export type Props = {
  type: "button" | "link" | "add";
  children: string;
  title?: string;
  to?: string;
  onClick?: () => void;
};

const Button = ({ children, type, to, onClick, title }: Props) => {
  if (type === "button") {
    return (
      <LinkContainer type="link" title={title} to={to} onClick={onClick}>
        {children}
      </LinkContainer>
    );
  }
  if (type === "add") {
    return (
      <AddContainer type="add" title={title} to={to} onClick={onClick}>
        {children}
      </AddContainer>
    );
  }
  return (
    <ButtonContainer type="button" title={title} to={to}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
