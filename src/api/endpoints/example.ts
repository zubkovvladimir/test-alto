import { NoParamEndpointContructor } from 'interfaces/Endpoints.interface';

const base = '/example' as const;

interface Endpoints {
  endpoint: NoParamEndpointContructor;
}

export const exampleEndpoints: Endpoints = {
  endpoint: () => `${base}`,
};
