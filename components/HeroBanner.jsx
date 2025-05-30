import React from 'react'
import Image from 'next/image'
import {CgShoppingCart} from 'react-icons/cg'
import headermy from '../src/assets/headermy.png'
import featured1 from '../src/assets/Featured1.png';
import featured2 from '../src/assets/Featured2.png';
import featured3 from '../src/assets/Featured3.png';
import featured4 from '../src/assets/Featured4.png';
import Link from 'next/link';

const HeroBanner = () => {
  return (
  <header className='header'>
  <div className='header-left-side'>
    <div className='header-content'>
      <span>Exclusive Offer – 40% Off</span>
      <h1>Elevate Your outfit with Industrial Vibes</h1>
      <p>No one can outshine your outfit when you’re wearing bold, trendsetting pieces from Bazar.</p>
      <Link href='/products'>
        <button className='btn' type='button'>
          <CgShoppingCart size={20} /> Shop Now
        </button>
      </Link>
    </div>

            <div className='header-featured'>
                <Image src={featured1} width={100} height={35} alt='img' />
                <Image src={featured2} width={100} height={35} alt='img' />
                <Image src={featured3} width={100} height={35} alt='img' />
                <Image src={featured4} width={100} height={35} alt='img' />
            </div>
        </div>

        <div className='header-right-side'>
            <div className='header-circle'>
                <Image className='header-img' src={headermy} width={650} height={650} alt='header image' />
            </div>
        </div>
    </header>
  )
}

export default HeroBanner