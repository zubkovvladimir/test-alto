import { NoParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base = '/front-products.php' as const;

interface Endpoints {
  list: NoParamEndpointConstructor;
}

export const productsEndpoints: Endpoints = {
  list: () => base,
};
