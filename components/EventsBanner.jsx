import React from 'react'
import Image from 'next/image'
import event1 from '../src/assets/event1.png'
import event4 from '../src/assets/event4.png'
import hood from '../src/assets/hood.png'

// Decorative festive images (update paths as needed)
import snowflakeImg from '../src/assets/snownflakes.png'
import reindeerImg from '../src/assets/reindeer.png'

const EventsBanner = () => {
  return (
 <  section className='event-container'>
      {/* Animated Decorations Around Title */}
      <div className='decorative-border'>
        <Image
          src={snowflakeImg}
          alt='Snowflake'
          width={30}
          height={30}
          className='animated-deco float snowflake'
        />
        <Image
          src={reindeerImg}
          alt='Reindeer'
          width={50}
          height={50}
          className='animated-deco sway reindeer'
        />
        <div className='subtitle'>
          <span>HOLIDAY PROMOTIONS</span>
          <h2>Christmas Sale Extravaganza</h2>
        </div>
        <Image
          src={reindeerImg}
          alt='Reindeer'
          width={50}
          height={50}
          className='animated-deco sway reindeer'
        />
        <Image
          src={snowflakeImg}
          alt='Snowflake'
          width={30}
          height={30}
          className='animated-deco float snowflake'
        />
      </div>
    
      {/* Snowfall Animation */}
      

     

      <div className='event-banner'>
        <div className='event-banner-left'>
          <div className='event-card'>
            <div className='content'>
              <h3>SAVE UP TO <span>70%</span></h3>
              <p>Celebrate the season with big savings!</p>
            </div>
            <Image src={event1} alt='Christmas product' />
          </div>

          <div className='event-card'>
            <h3>EXTRA 25% OFF</h3>
            <p>USE PROMO CODE</p>
            <button>CHRISTMAS25</button>
          </div>
        </div>

        <div className='event-banner-right'>
          <div className='event-banner-right-1'>
            <div className='details'>
              <p>Cozy Holiday Sweatshirt</p>
              <div className='price'>
                <span>₹1200.00</span>
                <span>₹850.00</span>
              </div>
            </div>
            <Image src={event4} alt='Sweatshirt for holidays' />
          </div>

          <div className='event-banner-right-2'>
            <div className='details'>
              <p>Festive Bomber Jacket</p>
              <div className='price'>
                <span>₹5000.00</span>
                <span>₹1999.00</span>
              </div>
            </div>
            <Image src={hood} alt='Bomber jacket Christmas' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsBanner
