import React from 'react'

export const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.thumbnail} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
         <button className="btn btn-primary">Buy Now</button>

      </div>
    </div>
  );
};
