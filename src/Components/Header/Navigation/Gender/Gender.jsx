import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cN from 'classnames';
import style from './Gender.module.scss';

export const Gender = () => {
  const { activeGender, genderList, categories } = useSelector(state => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map(gender => (
        <li key={gender} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cN(style.link, (isActive || gender === activeGender) && style.linkActive)
            }
            to={`/catalog/${gender}`}
          >
            {categories[gender].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};