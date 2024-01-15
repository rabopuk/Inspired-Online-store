import { Container } from '../../Layout/Container/Container.jsx';
import style from './Cart.module.scss';
import { CartItem } from './CartItem/CartItem.jsx';

export const Cart = ({ cartItems, goodsList }) => {
  const totalPrice = 0;

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>

        {goodsList.length
          ? <ul className={style.list}>
            {cartItems.map(item => (
              <li
                className={style.item}
                key={`${item.id}-${item.color}-${item.size}`}
              >
                <CartItem {...item} goodsList={goodsList} />
              </li>
            ))}
          </ul>
          : <h3>В корзине пусто</h3>
        }

        <div className={style.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
      </Container>
    </section>

  );
};