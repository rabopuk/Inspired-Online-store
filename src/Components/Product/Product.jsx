import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const.js';
import style from './Product.module.scss';
import Like from '../../assets/heart.svg?react';
import { ColorList } from '../ColorList/ColorList.jsx';

export const Product = ({ id, pic, title, price, colors, description }) => (
  <article className={style.product}>
    <NavLink className={style.link} to={`/product/${id}`}>
      <img
        className={style.image}
        src={`${API_URL}${pic}`}
        alt={`${title} ${description}`}
      />
      <h3 className={style.title}>{title}</h3>
    </NavLink>

    <div className={style.row}>
      <p className={style.price}>руб {price}</p>
      <button className={style.favorite}>
        <Like />
      </button>
    </div>

    <ColorList colors={colors} />
  </article>
);