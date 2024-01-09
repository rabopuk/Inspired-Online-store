import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cN from 'classnames';
import { fetchProduct } from '../../features/productSlice.js';
import { Container } from '../Layout/Container/Container.jsx';
import style from './ProductPage.module.scss';
import { API_URL } from '../../const.js';
import { ColorList } from '../ColorList/ColorList.jsx';
import { ProductSize } from '../ProductSize/ProductSize.jsx';
import { Count } from '../Count/Count.jsx';
import Like from '../../assets/heart.svg?react';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);

  const [selectedColor, setSelectedColor] = useState('');
  const handleColorChange = e => {
    setSelectedColor(e.target.value);
  };

  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <section className={style.card}>
      <Container className={style.container}>
        <img
          className={style.image}
          src={`${API_URL}${product.pic}`}
          alt={`${product.title} ${product.description}`}
        />

        <form className={style.content}>
          <h2 className={style.title}>{product.title}</h2>

          <p className={style.price}>руб {product.price}</p>

          <div className={style.vendorCode}>
            <span className={style.subtitle}>Артикул</span>
            <span className={style.id}>{product.id}</span>
          </div>

          <div className={style.color}>
            <p className={cN(style.subtitle, style.colorTitle)}>Цвет</p>
            <ColorList
              colors={product.colors}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>

          <ProductSize size={product.size} />

          <div className={style.description}>
            <p className={cN(style.subtitle, style.descriptionTitle)}>Описание</p>
            <p className={style.descriptionText}>{product.description}</p>
          </div>

          <div className={style.control}>
            <Count
              className={style.count}
              count={count}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />

            <button className={style.addCart} type='submit'>В корзину</button>

            <button
              className={style.favorite}
              aria-label='Добавить в избранное'
              type='button'
            >
              <Like />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};