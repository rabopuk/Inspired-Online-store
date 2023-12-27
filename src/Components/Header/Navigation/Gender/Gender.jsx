import { NavLink, useLocation } from 'react-router-dom';
import style from './Gender.module.scss';
import cN from 'classnames';

export const Gender = ({ list }) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  return (
    <ul className={style.gender}>
      {list.map(item => (
        <li key={item.link} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cN(style.link, (isActive || gender === item.link) && style.linkActive)
            }
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};