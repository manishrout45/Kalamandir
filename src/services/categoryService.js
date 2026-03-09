import { apiFetch } from './api';
export const categoryService = { getAll: () => apiFetch('/categories') };
