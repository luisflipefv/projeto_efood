import { CartContainer, Sidebar, Item, Prices } from "./styles";
import pizza from "../../assets/images/pizza.png";
import Button from "../Button";

const Cart = () => {
  return (
    <CartContainer>
      <div className="overlay"></div>
      <Sidebar>
        <Item>
          <img src={pizza} alt="pizza" />
          <div>
            <h4>Pizza Marguerita</h4>
            <p>R$60,90</p>
          </div>
          <button type="button"></button>
        </Item>
        <Item>
          <img src={pizza} alt="pizza" />
          <div>
            <h4>Pizza Marguerita</h4>
            <p>R$60,90</p>
          </div>
          <button type="button"></button>
        </Item>
        <Prices>
          <p>Valor Total:</p>
          <p>
            <span>R$280,00</span>
          </p>
        </Prices>
        <Button type="add">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
