import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAll } from "../../features/goodsSlice.js";
import { Cart } from "./Cart/Cart.jsx";
import { Order } from "./Order/Order.jsx";
import { OrderModal } from "./OrderModal/OrderModal.jsx";

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);
  const { orderStatus } = useSelector(state => state.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));
      setCount(countItems);
    }
  }, [count, countItems, cartItems, dispatch]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      {!!goodsList.length && <Order cartItems={cartItems} />}
      {orderStatus === 'success' && <OrderModal />}
    </>
  );
};