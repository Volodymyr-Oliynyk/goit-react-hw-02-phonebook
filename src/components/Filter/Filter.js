import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
    <input
      type="text"
      placeholder="Search contact"
      value={value}
      onChange={onChange}
    />
    </div>
  );
};

export default Filter;
