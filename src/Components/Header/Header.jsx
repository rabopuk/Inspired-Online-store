import { Top } from "./Top/Top.jsx";
import { Navigation } from "./Navigation/Navigation.jsx";
import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <Top />
    <Navigation />
  </header>
);