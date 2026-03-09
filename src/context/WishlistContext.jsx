'use client';

import { createContext, useMemo, useState } from 'react';

export const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [state, setState] = useState({});
  const value = useMemo(() => ({ state, setState }), [state]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}
