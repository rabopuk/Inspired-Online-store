import { useSelector } from 'react-redux';
import style from './Goods.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { Product } from '../Product/Product.jsx';

export const Goods = ({ title }) => {
  const { goodsList } = useSelector(state => state.goods);

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>{title ?? 'Новинки'}</h2>

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