import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Goods } from "../Goods/Goods.jsx";
import { fetchCategory } from "../../features/goodsSlice.js";

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchCategory({ list: favorites }));
  }, [favorites, dispatch]);

  return (
    <Goods title='Избранное' />
  );
};