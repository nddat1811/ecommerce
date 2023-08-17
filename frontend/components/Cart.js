import { useStateContext } from "@/lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
} from "@/styles/CartStyle";
import { Quantity } from "@/styles/ProductDetail";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove } = useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>t</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.small.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
