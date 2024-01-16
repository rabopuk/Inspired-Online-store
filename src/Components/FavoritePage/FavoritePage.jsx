import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Goods } from "../Goods/Goods.jsx";
import { fetchCategory } from "../../features/goodsSlice.js";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams.js";
import style from './FavoritePage.module.scss';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };

      if (page) {
        param.page = page;
      }

      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return (
    favorites.length
      ? <Goods title='Избранное' />
      : <h3 className={style.empty}>Нет избранных товаров</h3>
  );
};