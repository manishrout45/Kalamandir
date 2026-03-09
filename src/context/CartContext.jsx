'use client';

import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, setState] = useState({});
  const value = useMemo(() => ({ state, setState }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
