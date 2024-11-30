// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ setFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    setFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilterChange}>Appliquer le filtre</button>
    </div>
  );
};

export default Filter;
