import React from 'react';

import cx from 'classnames';
import { PageMeta } from 'interfaces/common.interface';
import { getPageCount, getPaginationWithDots } from 'utils/pages';

import { PageItem } from './PageItem';
import classes from './Pagination.module.scss';
import { Button } from 'components/Button';

interface PaginationProps {
  meta: PageMeta;
  onChange: (id: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ meta, onChange }) => {
  const pageTotalCount = getPageCount(meta.total, meta.perPage);
  const pagesArray = getPaginationWithDots(meta.currentPage, pageTotalCount);
  const prevPage = meta.currentPage - 4 > 1 ? meta.currentPage - 4 : 1;
  const nextPage = meta.currentPage + 4 < meta.lastPage ? meta.currentPage + 4 : meta.lastPage;

  const getKeyValueForDots = (item: number | string) => (item === '...' ? Math.random() : item);

  return (
    <div className={classes['pagination-wrap']}>
      <div className={classes.pagination__prev}>
        <Button onClick={() => onChange(prevPage)}>Назад</Button>
      </div>

      {pagesArray.length >= 2 && (
        <ul className={cx(classes.pagination, 'd-f')}>
          {meta.currentPage > meta.lastPage - 4 && (
            <PageItem
              currentPage={meta.currentPage}
              key={getKeyValueForDots('...')}
              onChange={onChange}
              pageControlValue="..."
            />
          )}

          {pagesArray.map((pageNumber) => (
            <PageItem
              currentPage={meta.currentPage}
              key={getKeyValueForDots(pageNumber)}
              onChange={onChange}
              pageControlValue={pageNumber}
            />
          ))}

          {meta.currentPage < 5 && (
            <PageItem
              currentPage={meta.currentPage}
              key={getKeyValueForDots('...')}
              onChange={onChange}
              pageControlValue="..."
            />
          )}
        </ul>
      )}

      <div className={classes.pagination__next}>
        <Button onClick={() => onChange(nextPage)}>Вперед</Button>
      </div>
    </div>
  );
};
