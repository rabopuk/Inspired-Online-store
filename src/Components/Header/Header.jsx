import { Search } from "../Search/Search.jsx";
import style from './Header.module.scss';
import { Navigation } from "./Navigation/Navigation.jsx";
import { Top } from "./Top/Top.jsx";

export const Header = () => (
  <header className={style.header}>
    <Top />
    <Search />
    <Navigation />
  </header>
);