'use client';

import { useEffect, useState } from 'react';

export default function useOrders() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([]);
  }, []);
  return items;
}
