import { useStateContext } from "@/lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity
} from "@/styles/CartStyle";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
export default function Cart() {
  const { cartItems, setShowCart, onAdd } = useStateContext();
  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>t</h1>
            <FaShoppingCart/>
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.format.small.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button>
                        <AiFillMinusCircle/>
                    </button>
                    <p>{item.quantity}</p>
                    <button>
                        <AiFillPlusCircle/>
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
