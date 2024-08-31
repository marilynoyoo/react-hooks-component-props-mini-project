import React from 'react';

const about = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img 
        src={image} 
        alt="blog logo" 
        style={{ width: '100%', maxWidth: '215px', height: 'auto' }} 
      />
      <p>{about}</p>
    </aside>
  );
};

export default about;