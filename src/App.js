import React, { useState } from 'react';

import { FilterSection } from './FilterSection';
import { Catalog } from './Catalog';
import { Navbar } from './Navbar';

export const App = () => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 10000, rating: 0 });

  return (
    <div>
   
      <Navbar setCategory={setCategory} />
      <FilterSection
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
        filters={filters}
        setFilters={setFilters}
      />
      <Catalog
        category={category}
        search={search}
        limit={limit}
        skip={skip}
        filters={filters}
      />
    </div>
  );
};
