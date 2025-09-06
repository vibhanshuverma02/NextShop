import React from 'react'
import { HeroBanner, EventsBanner, Newsletter, FeaturesBanner, Product } from '../components'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import featured1 from '../src/assets/Featured1.png';
import featured2 from '../src/assets/Featured2.png';
import featured3 from '../src/assets/Featured3.png';
import featured4 from '../src/assets/Featured4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = ({ products }) => {
  return (
    <>
      <HeroBanner />
      <EventsBanner />

      <div className='products-outer-container'>
        <div className='subtitle'>
          <span>PRODUCTS</span>
          <h2>Check What We Have</h2>
        </div>
        <Swiper
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 100 },
            1000: { slidesPerView: 2, spaceBetween: 0 },
            1260: { slidesPerView: 3, spaceBetween: 0 },
          }}
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
        >
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <FeaturesBanner />
      <Newsletter />
    </>
  )
}

export const getServerSideProps = async () => {
  const products = [
    {
      _id: '1',
      name: 'Featured Product 1',
      slug: { current: 'featured-1' },
      price: 50,
      image: featured1,
    },
    {
      _id: '2',
      name: 'Featured Product 2',
      slug: { current: 'featured-2' },
      price: 100,
      image: featured2,
    },
    {
      _id: '3',
      name: 'Featured Product 3',
      slug: { current: 'featured-3' },
      price: 70,
      image: featured3,
    },
    {
      _id: '4',
      name: 'Featured Product 4',
      slug: { current: 'featured-4' },
      price: 90,
      image: featured4,
    },
  ];

  return { props: { products } };
};

export default Home;
