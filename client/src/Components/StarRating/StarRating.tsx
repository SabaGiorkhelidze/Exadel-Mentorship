import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(4);
  const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
  };

  return (
    <div className='flex flex-row'>
      {[...Array(5).keys()].map((index) => (
        <FaStar
          key={index}
          size={24}
          style={{
            color: index < rating ? colors.orange : colors.grey,
          }}
        //   onClick={() => setRating(index + 1)} // set rating click
        />
      ))}
      <div className='mx-1'>(88)</div>
    </div>
  );
};


export default StarRating