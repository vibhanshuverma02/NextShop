// import React, { useState } from 'react'
// import { client, urlFor } from '../../lib/client'
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
// import {CgShoppingCart} from 'react-icons/cg'
// import { useStateContext } from '../../context/StateContext';

// const ProductDetails = ({products, product}) => {
//     const { image, name, details, price, tags, care } = product;
//     const [index, setIndex] = useState(0);
//     const {decQty, incQty, qty, onAdd} = useStateContext();

//     const careList = [];

//     {for (let i = 0; i < care.length; i++) {
//         careList.push(care[i].children[0].text)
//     }}

//     return (
//         <div className='products'>
//             <div className='product-detail-container'>
//                 <div className='product-images'>
//                     <div className='small-images-container'>
//                         {image?.map((item, ind) => (
//                             <img 
//                             key={ind}
//                             src={urlFor(item)} 
//                             className='small-image' 
//                             onMouseEnter={() => setIndex(ind)} />
//                         ))}
//                     </div>
//                     <div className='big-image-container'>
//                         <img src={urlFor(image && image[index])} />
//                     </div>
//                 </div>
//                 <div className='product-details'>
//                     <div className='name-and-category'>
//                         <h3>{name}</h3>
//                         <span>{tags}</span>   
//                     </div>
//                     <div className='size'>
//                         <p>SELECT SIZE</p>
//                         <ul>
//                             <li>XS</li>
//                             <li>S</li>
//                             <li>M</li>
//                             <li>L</li>
//                             <li>XL</li>
//                         </ul>
//                     </div>
//                     <div className='quantity-desc'>
//                         <h4>Quantity: </h4>
//                         <div>
//                             <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
//                             <span className='num' onClick=''>{qty}</span>
//                             <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
//                         </div>
//                     </div>
//                     <div className='add-to-cart'>
//                         <button className='btn' type='button' onClick={() => onAdd(product, qty)}><CgShoppingCart size={20} />Add to Cart</button>
//                         <p className='price'>₹{price*10}.00</p>  
//                     </div>
//                 </div>
//             </div>

//             <div className='product-desc-container'>
//                 <div className='desc-title'>
//                     <div className="desc-background">
//                         Overview
//                     </div>
//                     <h2>Product Information</h2>  
//                 </div>
//                 <div className='desc-details'>
//                     <h4>PRODUCT DETAILS</h4>
//                     <p>{details[0].children[0].text}</p>  
//                 </div>
//                 <div className='desc-care'>
//                     <h4>PRODUCT CARE</h4>
//                     <ul>
//                     {careList.map(list => (
//                         <li>{list}</li>
//                     ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default ProductDetails

// export const getStaticProps = async ({params: {slug}}) => {
//     const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//     const productsQuery = '*[_type == "product"]'
//     const product = await client.fetch(query);
//     const products = await client.fetch(productsQuery)
  
//     return {
//       props: { products, product }
//     }
// }

// // Generates `/product/1` and `/product/2`
// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
//         slug {
//             current
//         }
//     }`;

//     const products = await client.fetch(query);

//     const paths = products.map((product) => ({
//         params: {
//             slug: product.slug.current
//         }
//     }));

//     return {
//       paths,
//       fallback: 'blocking'
//     }
// }
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { useStateContext } from '../../context/StateContext';

// import your images
import featured1 from '../../src/assets/Featured1.png';
import featured2 from '../../src/assets/Featured2.png';
import featured3 from '../../src/assets/Featured3.png';
import featured4 from '../../src/assets/Featured4.png';

// sample product list (same as Home.jsx)
const sampleProducts = [
  {
    _id: '1',
    name: 'Featured Product 1',
    slug: { current: 'featured-1' },
    price: 50,
    details: 'This is a great product number 1.',
    tags: 'Category A',
    care: ['Hand wash only', 'Do not tumble dry'],
    image: [featured1],
  },
  {
    _id: '2',
    name: 'Featured Product 2',
    slug: { current: 'featured-2' },
    price: 100,
    details: 'This is a great product number 2.',
    tags: 'Category B',
    care: ['Machine washable', 'Iron at low temperature'],
    image: [featured2],
  },
  {
    _id: '3',
    name: 'Featured Product 3',
    slug: { current: 'featured-3' },
    price: 70,
    details: 'This is a great product number 3.',
    tags: 'Category C',
    care: ['Wipe clean only'],
    image: [featured3],
  },
  {
    _id: '4',
    name: 'Featured Product 4',
    slug: { current: 'featured-4' },
    price: 90,
    details: 'This is a great product number 4.',
    tags: 'Category D',
    care: ['Dry clean only'],
    image: [featured4],
  },
];

const ProductDetails = ({ product }) => {
  const { image, name, details, price, tags, care } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div className='products'>
      <div className='product-detail-container'>
        <div className='product-images'>
          <div className='small-images-container'>
            {image?.map((item, ind) => (
              <img
                key={ind}
                src={item.src}
                className={`small-image ${index === ind ? 'selected' : ''}`}
                onMouseEnter={() => setIndex(ind)}
              />
            ))}
          </div>
          <div className='big-image-container'>
            <img src={image[index].src} />
          </div>
        </div>
        <div className='product-details'>
          <div className='name-and-category'>
            <h3>{name}</h3>
            <span>{tags}</span>
          </div>
          <div className='size'>
            <p>SELECT SIZE</p>
            <ul>
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          <div className='quantity-desc'>
            <h4>Quantity: </h4>
            <div>
              <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
            </div>
          </div>
          <div className='add-to-cart'>
            <button className='btn' type='button' onClick={() => onAdd(product, qty)}>
              <CgShoppingCart size={20} /> Add to Cart
            </button>
            <p className='price'>₹{price * 10}.00</p>
          </div>
        </div>
      </div>

      <div className='product-desc-container'>
        <div className='desc-title'>
          <div className='desc-background'>Overview</div>
          <h2>Product Information</h2>
        </div>
        <div className='desc-details'>
          <h4>PRODUCT DETAILS</h4>
          <p>{details}</p>
        </div>
        <div className='desc-care'>
          <h4>PRODUCT CARE</h4>
          <ul>
            {care.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;

export const getStaticPaths = async () => {
  const paths = sampleProducts.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const product = sampleProducts.find((p) => p.slug.current === slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
};
