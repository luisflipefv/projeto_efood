import { CartContainer, Sidebar, Item, Prices } from "./styles";
import pizza from "../../assets/images/pizza.png";
import Button from "../Button";
import { close, remove } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { formataPreco } from "../Product2";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };
  const totalPrice = () => {
    return items.reduce((acc, curr) => acc + curr.preco, 0);
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <div className="overlay" onClick={closeCart}></div>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Item key={item.id}>
              <img src={item.foto} alt="pizza" />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
              ></button>
            </Item>
          ))}
        </ul>
        <Prices>
          <p>Valor Total:</p>
          <p>
            <span>{formataPreco(totalPrice())}</span>
          </p>
        </Prices>
        <Button type="add" onClick={closeCart}>
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
