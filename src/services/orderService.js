import { apiFetch } from './api';
export const orderService = { getAll: () => apiFetch('/orders') };
