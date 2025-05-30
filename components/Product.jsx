import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({product: {image, name, slug, price}}) => {
  const prices = price *10;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} width={380} height={400} className='product-image' />
          <p className='product-name'>{name}</p>
          <p className='product-price'>₹{prices}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product