'use client';

import { createContext, useMemo, useState } from 'react';

export const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [state, setState] = useState({});
  const value = useMemo(() => ({ state, setState }), [state]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}
