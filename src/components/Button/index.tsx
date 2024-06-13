import { ButtonContainer } from "./styles";

export type Props = {
  type: "button" | "link";
  children: string;
  title: string;
  to?: string;
  onClick?: () => void;
};

const Button = ({ children, type, to, onClick, title }: Props) => {
  if (type === "button") {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer type="link" title={title} to={to} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
