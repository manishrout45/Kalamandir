'use client';

import { useEffect, useState } from 'react';

export default function useProducts() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([]);
  }, []);
  return items;
}
