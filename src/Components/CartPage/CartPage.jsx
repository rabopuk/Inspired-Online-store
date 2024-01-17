import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../features/goodsSlice.js";
import { Preloader } from "../Preloader/Preloader.jsx";
import { Cart } from "./Cart/Cart.jsx";
import { Order } from "./Order/Order.jsx";
import { OrderModal } from "./OrderModal/OrderModal.jsx";

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList, status } = useSelector(state => state.goods);
  const { orderStatus } = useSelector(state => state.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));
      setCount(countItems);
    }
  }, [count, countItems, cartItems, dispatch]);

  return status === 'loading'
    ? (<Preloader />)
    : (
      <>
        <Cart cartItems={cartItems} goodsList={goodsList} />
        {!!cartItems.length && <Order cartItems={cartItems} />}
        {orderStatus === 'success' && <OrderModal />}
      </>
    );
};