import React, { useEffect, useState } from 'react';
import { Item } from './Item';

export const Catalog = ({ category, search, limit, skip, filters }) => {
  const [items, setItems] = useState([]);
  const baseUrl = "https://dummyjson.com";

  useEffect(() => {
    let url = '';

    if (search) {
      url = `${baseUrl}/products/search?q=${search}`;
    } else if (category) {
      url = `${baseUrl}/products/category/${category}`;
    } else {
      url = `${baseUrl}/products?limit=${limit}&skip=${skip}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const products = data.products || [];
        const filtered = products.filter(item =>
          item.price >= filters.minPrice &&
          item.price <= filters.maxPrice &&
          item.rating >= filters.rating
        );
        setItems(filtered);
      })
      .catch(error => console.error(error));
  }, [category, search, limit, skip, filters]);

  return (
    <div className="d-flex flex-wrap gap-3 p-3">
      {items.length === 0 ? <p>No products found.</p> : items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};


