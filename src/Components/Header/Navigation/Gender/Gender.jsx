import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cN from 'classnames';
import style from './Gender.module.scss';

export const Gender = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender);

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