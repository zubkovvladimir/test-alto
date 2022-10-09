/**
 * Метод возвращает количество страниц в пагинации
 * @param totalCount общее количество элементов
 * @param limit количество элементов на странице
 */
export const getPageCount = (totalCount: number, limit: number): number => Math.ceil(totalCount / limit);

/**
 * Метод возвращает массив элементов пагинации, с точками при большом количестве страниц
 * @param current текущая страница
 * @param last последняя страница
 */
export const getPaginationWithDots = (current: number, last: number): (string | number)[] => {
  const delta = current === 1 ? 3 : current === 2 ? 2 : 1;
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots: (string | number)[] = [];
  const isLastVisible = current >= 5;
  const isFirstVisible = current <= last - 4;

  for (let i = 1; i <= last; i += 1) {
    if ((i === 1 && isFirstVisible) || (isLastVisible && i === last) || (i >= left && i < right)) {
      range.push(i);
    }
  }

  let rest: number;

  range.forEach((i) => {
    if (rest) {
      if (i - rest === 2) {
        rangeWithDots.push(rest + 1);
      } else if (i - rest !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    rest = i;
  });

  return rangeWithDots;
};
