import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTitle } from 'ahooks';
import { ReactComponent as Cart } from 'assets/images/icons/cart.svg';
import cx from 'classnames';
import { Button } from 'components/Button';
import { Pagination } from 'components/Pagination';
import { appName } from 'constants/app';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchProducts } from 'store/products/actions';

import classes from './MainPage.module.scss';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { items: products, meta } = useTypedSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ currentPage }));
  }, [currentPage]);

  useTitle(`${appName} | Главная`);

  return (
    <div className={classes.root}>
      <ul className={classes['products-list']}>
        {products.length ? (
          products.map((product) => (
            <li className={classes['products-list__item']} key={product.id}>
              <article className={classes.product}>
                <img
                  alt={product.name}
                  className={classes.product__img}
                  height={product.image_height}
                  src={product.image_url}
                  width={product.image_width}
                />

                <div className={classes.product__wrap}>
                  <span
                    className={cx(classes.product__availability, { [classes['--available']]: !!product.availability })}
                  >
                    {product.availability ? 'В наличии' : 'Под заказ'}
                  </span>
                  <a className={classes.product__name} href="/">
                    {product.name}
                  </a>
                  <p className={classes.product__price}>{product.price} ₽</p>

                  <div className={classes.product__extra}>
                    <p className={classes.product__color}>Цвет - {product.color}</p>
                    <p className={classes.product__desc}>{product.short_desc}</p>
                    <Button variant="primary">
                      <Cart /> <span className={classes['product__btn-text']}>В КОРЗИНУ</span>
                    </Button>
                  </div>
                </div>
              </article>
            </li>
          ))
        ) : (
          <p className={classes.product__message}>Нет данных</p>
        )}
      </ul>

      <div className={classes.pagination}>
        <Pagination
          meta={{ currentPage, lastPage: meta.lastPage, perPage: 4, total: 88 }}
          onChange={(currentPage) => setCurrentPage(currentPage)}
        />
      </div>
    </div>
  );
};

export default MainPage;
