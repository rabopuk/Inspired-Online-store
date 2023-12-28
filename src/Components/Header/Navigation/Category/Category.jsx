import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cN from 'classnames';
import style from './Category.module.scss';

export const Category = () => {
  const { activeGender, categories } = useSelector(state => state.navigation);

  return (
    <ul className={style.category}>
      {categories[activeGender]?.list?.map(item => (
        <li key={item.slug} className={style.item}>
          <NavLink
            className={({ isActive }) => cN(style.link, isActive && style.linkActive)}
            to={`${activeGender}/${item.slug}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};