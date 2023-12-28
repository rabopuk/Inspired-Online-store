import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cN from 'classnames';
import style from './Category.module.scss';

export const Category = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender);
  const categoriesList = list.find(item => item.link === gender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map(item => (
        <li key={item.link} className={style.item}>
          <NavLink
            className={({ isActive }) => cN(style.link, isActive && style.linkActive)}
            to={`${gender}/${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};