import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../features/goodsSlice.js";
import { Container } from "../Layout/Container/Container.jsx";
import { Product } from "../Product/Product.jsx";
import style from './MainPage.module.scss';

export const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchGoods(gender))
  }, [gender, dispatch]);

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>Новинки</h2>

        <ul className={style.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};