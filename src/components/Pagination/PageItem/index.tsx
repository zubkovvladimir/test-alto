import React from 'react';

import { Button } from 'components/Button';

import classes from '../Pagination.module.scss';

interface PageItemProps {
  pageControlValue: string | number;
  currentPage: number;
  onChange: (id: number) => void;
}

export const PageItem: React.FC<PageItemProps> = ({ pageControlValue, currentPage, onChange }) => {
  const isCurrentPage = pageControlValue === currentPage;

  const onPageClick = (item: number | string) => {
    if (typeof item === 'number') {
      onChange(item);
    }
  };

  return (
    <li className={classes['pagination__item']}>
      <Button
        disabled={isCurrentPage}
        isActive={isCurrentPage}
        onClick={() => onPageClick(pageControlValue)}
        size="pagination"
        variant="secondary"
      >
        {pageControlValue}
      </Button>
    </li>
  );
};
