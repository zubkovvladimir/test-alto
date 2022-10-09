/**
 * Метод возвращает двумерный массив - страницы разбитые на чанки
 * @param lastPage последняя страница
 * @param chunk размер порции страниц
 */
export const getPagination = (lastPage: number, chunk: number): number[][] => {
  const paginationArray = Array.from({ length: lastPage }, (_, i) => i + 1);
  const paginationParts = [];

  for (let i = 0; i <= lastPage; i += chunk) {
    paginationParts.push(paginationArray.slice(i, i + chunk));
  }

  return paginationParts;
};
