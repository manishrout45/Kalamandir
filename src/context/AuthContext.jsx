'use client';

import { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, setState] = useState({});
  const value = useMemo(() => ({ state, setState }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
