import React from 'react';
import useSingleProduct from '../../hooks/useSingleProduct';

const ProductDetails = () => {
  const [singleProduct] = useSingleProduct()
  console.log('single',singleProduct);
  return (
    <div>
      
    </div>
  );
};

export default ProductDetails;