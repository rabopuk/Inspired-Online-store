import cN from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import LikeSVG from '../../assets/heart.svg?react';
import { addToFavorite, removeFromFavorite } from '../../features/favoritesSlice.js';
import style from './BtnLike.module.scss';

export const BtnLike = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  };

  return (
    <button
      className={isFavorite ? cN(style.like, style.active) : style.like}
      aria-label='Добавить в избранное'
      type='button'
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  );
};