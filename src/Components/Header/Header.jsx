import { Top } from "./Top/Top.jsx";
import { Navigation } from "./Navigation/Navigation.jsx";

export const Header = ({ list }) => (
  <header>
    <Top />
    <Navigation list={list} />
  </header>
);