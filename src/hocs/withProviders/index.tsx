import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store';

/**
 * Подключение провайдеров
 * @param App
 */
export function withProviders<T = any>(App: FC<T>) {
  return ({ ...props }: T): ReactElement => (
    <Provider store={store}>
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    </Provider>
  );
}
