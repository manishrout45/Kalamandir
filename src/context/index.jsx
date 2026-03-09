'use client';

import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { WishlistProvider } from './WishlistContext';
import { AdminAuthProvider } from './AdminAuthContext';

export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <WishlistProvider>
          <CartProvider>{children}</CartProvider>
        </WishlistProvider>
      </AdminAuthProvider>
    </AuthProvider>
  );
}
