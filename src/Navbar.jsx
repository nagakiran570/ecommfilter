import React from 'react';

export const Navbar = ({ setCategory }) => {
  const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ECOMM FILTER</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className="dropdown-item"
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
           
           
          </ul>

        
        </div>
      </div>
    </nav>
  );
};
