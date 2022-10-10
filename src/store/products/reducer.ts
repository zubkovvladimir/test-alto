import { createReducer } from '@reduxjs/toolkit';
import { defaultPageMeta } from 'constants/other';
import { Product } from 'interfaces/api/products.interface';
import { PageMeta } from 'interfaces/common.interface';

import { fetchProducts } from './actions';

interface ProductsState {
  isLoading: boolean;
  items: Product[];
  meta: PageMeta;
  error: string | null;
}

const initialState: ProductsState = {
  isLoading: false,
  items: [],
  meta: defaultPageMeta,
  error: null,
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    })
    .addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload.products;
      state.meta.lastPage = payload.totalCount;
      state.error = null;
    });
});
