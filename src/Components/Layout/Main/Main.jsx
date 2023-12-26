import style from './Main.module.scss';

export const Main = ({ children }) => (
  <div className={style.main}>{children}</div>
);