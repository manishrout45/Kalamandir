'use client';

import { useContext } from 'react';
import { AdminAuthContext } from '@/context/AdminAuthContext';

export default function useAdmin() {
  return useContext(AdminAuthContext);
}
