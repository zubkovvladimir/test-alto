import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer as products } from './products/reducer';

export const rootReducer = combineReducers({ products });

export type RootState = ReturnType<typeof rootReducer>;
