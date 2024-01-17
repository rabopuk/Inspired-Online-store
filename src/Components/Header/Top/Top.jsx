import cN from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartSVG from '../../../assets/cart.svg?react';
import LikeSVG from '../../../assets/heart.svg?react';
import SearchSVG from '../../../assets/search.svg?react';
import { toggleSearch } from "../../../features/searchSlice.js";
import { Container } from "../../Layout/Container/Container.jsx";
import style from './Top.module.scss';
import logo from '/src/assets/logo.svg';


export const Top = () => {
  const { countItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    dispatch(toggleSearch());
  };

  return (
    <div className={style.top}>
      <Container className={style.topContainer}>
        <a className={cN(style.topLink, style.topPhone)} href="tel:89304902620">8 930 490 26 20</a>

        <NavLink className={style.topLogo} to="/">
          <img src={logo} alt="Логотип Inspired" />
        </NavLink>

        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li className={style.navItem}>
              <button className={style.topLink} onClick={handleOpenSearch}>
                <SearchSVG />
              </button>
            </li>
            <li className={style.navItem}>
              <NavLink className={style.topLink} to='/cart'>
                <CartSVG />
                <span className={style.topLinkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink className={cN(style.topLink, style.like)} to='/favorite'>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};