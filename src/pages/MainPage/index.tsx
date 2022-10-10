import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTitle } from 'ahooks';
import { Pagination } from 'components/Pagination';
import { appName } from 'constants/app';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchProducts } from 'store/products/actions';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const products = useTypedSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts({ currentPage }));
  }, [currentPage]);

  useTitle(`${appName} | Главная`);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>{product.id}</li>
        ))}
      </ul>
      <Pagination
        meta={{ currentPage, lastPage: 22, perPage: 4, total: 88 }}
        onChange={(currentPage) => setCurrentPage(currentPage)}
      />
    </div>
  );
};

export default MainPage;
