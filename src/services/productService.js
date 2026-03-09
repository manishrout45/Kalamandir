import { apiFetch } from './api';

export const productService = {
  getAll: () => apiFetch('/products'),
  getById: (id) => apiFetch(`/products/${id}`),
};
