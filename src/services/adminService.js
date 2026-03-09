import { apiFetch } from './api';
export const adminService = { stats: () => apiFetch('/admin/stats') };
