import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAll } from "../../features/goodsSlice.js";
import { Goods } from "../Goods/Goods.jsx";
import style from './SearchPage.module.scss';


export const SearchPage = () => {
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q');
    const params = { search };

    dispatch(fetchAll(params))
  }, [searchParams, dispatch]);

  return (
    goodsList.length
      ? <Goods title='Поиск' />
      : <h3 className={style.empty}>Ничего не найдено по вашему запросу: &apos;{searchParams.get('q')}&apos;</h3>
  );
};