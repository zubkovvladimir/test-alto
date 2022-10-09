import { FC, useState } from 'react';

import { useTitle } from 'ahooks';
import { PaginationProps } from 'antd';
import { Pagination } from 'components/Pagination';
import { appName } from 'constants/app';

const MainPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useTitle(`${appName} | Главная`);

  return (
    <div>
      <Pagination
        meta={{ currentPage, lastPage: 22, perPage: 4, total: 88 }}
        onChange={(currentPage) => setCurrentPage(currentPage)}
      />
    </div>
  );
};

export default MainPage;
