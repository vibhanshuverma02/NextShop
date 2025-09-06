import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/product/${product.slug.current}`}>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={300} 
          height={300} 
          className="product-image"
        />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
