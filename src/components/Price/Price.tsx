import React from 'react';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }) => {
  return <td>{price}</td>;
};

export default Price;
