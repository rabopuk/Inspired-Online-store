import style from './ProductSize.module.scss';

export const ProductSize = ({ size, selectedSize, handleSizeChange }) => (
  <div className={style.size}>
    <p className={style.title}>Размер</p>
    <div className={style.list}>
      {size?.map(item => (
        <label className={style.item} key={item}>
          <input
            className={style.input}
            type='radio'
            name='size'
            value={item}
            checked={selectedSize === item}
            onChange={handleSizeChange}
          />
          <span className={style.check}>{item}</span>
        </label>
      ))}
    </div>
  </div>
);