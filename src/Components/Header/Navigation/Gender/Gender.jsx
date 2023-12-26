import { NavLink } from 'react-router-dom';
import style from './Gender.module.scss';
import cN from 'classnames';

const list = [
  { link: 'women', title: 'Женщины' },
  { link: 'men', title: 'Мужчины' }
];

export const Gender = () => (
  <ul className={style.gender}>
    {list.map(item => (
      <li key={item.link} className={style.item}>
        <NavLink
          className={({ isActive }) => cN(style.link, isActive && style.linkActive)}
          to={item.link}
        >
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
);