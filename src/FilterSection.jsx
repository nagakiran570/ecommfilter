import React from 'react';

export const FilterSection = ({
  search,
  setSearch,
  limit,
  setLimit,
  skip,
  setSkip,
  filters,
  setFilters
}) => {
  return (
    <div className="p-3 d-flex flex-wrap gap-3 align-items-center">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="form-control w-auto"
      />

      {/* Limit Dropdown */}
      <select
        className="form-select w-auto"
        value={limit}
        onChange={e => setLimit(Number(e.target.value))}
      >
        {[5, 10, 20, 30, 50].map(val => (
          <option key={val} value={val}>{val} per page</option>
        ))}
      </select>

      {/* Skip Dropdown */}
      <select
        className="form-select w-auto"
        value={skip}
        onChange={e => setSkip(Number(e.target.value))}
      >
        {[0, 10, 20, 30, 40, 50].map(val => (
          <option key={val} value={val}>Skip {val}</option>
        ))}
      </select>

      {/* Price Range Seekbar */}
      <div className="d-flex flex-column">
        <label>Price Range: {filters.minPrice} - {filters.maxPrice}</label>
        <input
          type="range"
          min={0}
          max={5000}
          step={100}
          value={filters.minPrice}
          onChange={e => setFilters({ ...filters, minPrice: Number(e.target.value) })}
        />
        <input
          type="range"
          min={1000}
          max={10000}
          step={100}
          value={filters.maxPrice}
          onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
        />
      </div>

      {/* Rating Radio Buttons */}
      <div className="d-flex flex-column">
        <label>Minimum Rating</label>
        <div className="d-flex gap-2">
          {[0, 2, 3, 4, 5].map(rating => (
            <div key={rating} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={() => setFilters({ ...filters, rating })}
              />
              <label className="form-check-label">{rating}+</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
