import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  CartContainer,
  Sidebar,
  Item,
  Prices,
  CartMenu,
  ConfirmationMenu,
  DeliveryMenu,
  InputGroup,
  Input,
  CartButton,
  PaymentMenu,
  CartButtonLink,
} from "./styles";
import { close, remove } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import { formataPreco } from "../Product2";
import { useState } from "react";
import { usePurchaseMutation } from "../../services/api";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [menu, setMenu] = useState("cart");
  const [paymentMenu, setPaymentMenu] = useState(false);

  const dispatch = useDispatch();

  const [purchase, { data, isSuccess }] = usePurchaseMutation();

  const form = useFormik({
    initialValues: {
      receiver: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 letras")
        .required("Campo obrigatório"),
      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      zipCode: Yup.string()
        .min(9, "O CEP precisa ter 8 números")
        .max(8, "O CEP precisa ter 8 números")
        .required("Campo obrigatório"),
      number: Yup.string().required("Campo obrigatório"),

      cardName: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required("O campo é obrigatório") : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required("O campo é obrigatório") : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required("O campo é obrigatório") : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required("O campo é obrigatório") : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        paymentMenu ? schema.required("O campo é obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            number: Number(values.number),
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: [
          {
            id: 1,
            price: 99,
          },
        ],
      });
    },
  });

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const totalPrice = () => {
    return items.reduce((acc, curr) => acc + curr.preco, 0);
  };

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  const gotToPaymentMenu = () => {
    if (
      form.values.receiver &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number
    ) {
      setMenu("payment");
      setPaymentMenu(true);
    } else {
      alert("Preencha os campos obrigatórios");
    }
  };

  console.log(form);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <div className="overlay" onClick={closeCart}></div>
      <Sidebar>
        {isSuccess ? (
          <ConfirmationMenu>
            <>
              <h3>Pedido Realizado - {data?.orderId || "ORDER_ID"}</h3>
              <p>
                Gostariamos de ressaltar que nosso entregadores não estão
                autorizados a realizar cobranças extras
              </p>
              <p>
                Lembre-se da importância de higiênizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e bem
                estar durante a refeição
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
            <CartButton>
              <CartButtonLink to={"/"} onClick={closeCart}>
                Concluir
              </CartButtonLink>
            </CartButton>
          </ConfirmationMenu>
        ) : (
          <form onSubmit={() => form.handleSubmit()}>
            {menu === "cart" && (
              <CartMenu>
                <ul>
                  {items.map((item) => {
                    return (
                      <Item key={item.id}>
                        <img src={item.foto} alt="imagem" />
                        <div>
                          <h4>{item.nome}</h4>
                          <p>{formataPreco(item.preco)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                        ></button>
                      </Item>
                    );
                  })}
                </ul>
                <Prices>
                  <p>Valor Total:</p>
                  <p>
                    <span>{formataPreco(totalPrice())}</span>
                  </p>
                </Prices>
                <CartButton
                  type="button"
                  onClick={() => {
                    if (items.length > 0) {
                      setMenu("delivery");
                    } else {
                      alert("Adicione produtos ao carrinho");
                    }
                  }}
                >
                  Continuar com a entrega
                </CartButton>
              </CartMenu>
            )}
            {menu === "delivery" && (
              <DeliveryMenu>
                <h3>Entrega</h3>
                <div>
                  <InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <Input
                      maxWidth="344px"
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError("receiver") ? "error" : ""}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <Input
                      maxWidth="344px"
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError("address") ? "error" : ""}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <Input
                      maxWidth="344px"
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError("city") ? "error" : ""}
                    />
                  </InputGroup>
                  <div>
                    <InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <Input
                        maxWidth="155px"
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError("zipCode") ? "error" : ""}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="number">Número</label>
                      <Input
                        maxWidth="155px"
                        type="text"
                        id="number"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError("number") ? "error" : ""}
                      />
                    </InputGroup>
                  </div>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <Input
                      maxWidth="344px"
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError("complement") ? "error" : ""}
                    />
                  </InputGroup>
                </div>
                <CartButton type="submit" onClick={() => gotToPaymentMenu()}>
                  Continuar com pagamento
                </CartButton>
                <CartButton type="button" onClick={() => setMenu("cart")}>
                  Voltar para o carrinho
                </CartButton>
              </DeliveryMenu>
            )}
            {menu === "payment" && (
              <PaymentMenu>
                <h3>Pagamento - Valor a pagar {formataPreco(totalPrice())}</h3>
                <div>
                  <InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <Input
                      maxWidth="344px"
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getError("cardName") ? "error" : ""}
                    />
                  </InputGroup>
                  <div>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <Input
                        maxWidth="288px"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError("cardNumber") ? "error" : ""}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <Input
                        maxWidth="87px"
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError("cardCode") ? "error" : ""}
                      />
                    </InputGroup>
                  </div>
                  <div>
                    <InputGroup>
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <Input
                        maxWidth="344px"
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError("expiresMonth") ? "error" : ""}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expiresYear">Ano do vencimento</label>
                      <Input
                        maxWidth="344px"
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError("expiresYear") ? "error" : ""}
                      />
                    </InputGroup>
                  </div>
                </div>
                <CartButton type="submit" onClick={() => form.handleSubmit()}>
                  Finalizar Pagamento
                </CartButton>
                <CartButton type="button" onClick={() => setMenu("delivery")}>
                  Voltar para edição de endereço
                </CartButton>
              </PaymentMenu>
            )}
          </form>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
