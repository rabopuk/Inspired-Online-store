import cN from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../../const.js';
import { addToCart, removeFromCart } from '../../../../features/cartSlice.js';
import { Count } from '../../../Count/Count.jsx';
import style from './CartItem.module.scss';

export const CartItem = ({ id, color, size, count, goodsList }) => {
  const dispatch = useDispatch();
  const { colorList } = useSelector(state => state.color);
  const item = goodsList.find(item => item.id === id);

  const handleCountChange = (count) => {
    dispatch(addToCart({ id, color, size, count }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id, color, size }));
  };

  return (
    <article className={style.item}>
      <img
        className={style.image}
        src={`${API_URL}${item?.pic}`}
        alt={`${item?.title} ${item?.description}`}
      />

      <div className={style.content}>
        <h3 className={style.title}>{item?.title}</h3>

        <p className={style.price}>руб {item?.price}</p>

        <div className={style.vendorCode}>
          <span className={style.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
      </div>

      <div className={style.prop}>
        <div className={style.color}>
          <p className={cN(style.subtitle, style.colorTitle)}>Цвет</p>

          <div
            className={style.colorItem}
            style={{ '--data-color': colorList?.find(item => item.title === color)?.code }}
          ></div>
        </div>

        <div className={style.size}>
          <p className={cN(style.subtitle, style.sizeTitle)}>Размер</p>

          <span className={style.sizeItem}>{size}</span>
        </div>
      </div>

      <button
        className={style.del}
        aria-label='Удалить товар из корзины'
        type='button'
        onClick={handleRemoveItem}
      >
      </button>

      <Count
        className={style.count}
        count={count}
        handleDecrement={() => {
          handleCountChange(count - 1)
        }}
        handleIncrement={() => {
          handleCountChange(count + 1)
        }}
      />
    </article>
  );
};