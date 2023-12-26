import cN from "classnames";
import style from './Container.module.scss';

export const Container = ({ className, children }) => (
  <div className={cN(style.container, className)}>{children}</div>
);