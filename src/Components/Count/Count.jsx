import cN from 'classnames';
import style from './Count.module.scss';

export const Count = ({ className, count, handleIncrement, handleDecrement }) => (
  <div className={cN(style.count, className)}>
    <button
      className={style.item}
      type='button'
      onClick={handleDecrement}
    >&#8722;</button>
    <span className={cN(style.item, style.number)}>{count}</span>
    <button
      className={style.item}
      type='button'
      onClick={handleIncrement}
    >&#43;</button>
  </div>
);