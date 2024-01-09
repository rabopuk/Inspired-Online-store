import LikeSVG from '../../assets/heart.svg?react';
import style from './BtnLike.module.scss';

export const BtnLike = ({ id }) => {
  return (
    <button
      className={style.like}
      aria-label='Добавить в избранное'
      type='button'
    >
      <LikeSVG />
    </button>
  );
};