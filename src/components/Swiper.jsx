import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiShoppingCartSimpleFill } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
    <div className="container">
      <h1 className="heading">Cold Pressed Oils</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100 ,
          modifier: 2.5,
          // slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="https://i5.walmartimages.com/asr/1cb0b3d1-bb25-4f7f-a297-7f2873026114.955de925539fdd78afd7d63f582eb1de.jpeg" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill style={{ width: '50px', height: '50px', color: '#000' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Sun Oil</h2>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41MB8%2Bd5JbL.jpg" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill style={{ width: '50px', height: '50px', color: '#000' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Olive Oil</h2>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/R.972b7b24197433882fd47077e1e4c3fe?rik=o3kh5fNQvo0qBA&riu=http%3a%2f%2foliveoil.com.cy%2fprestashop%2f87-thickbox_default%2fto-archontiko-koroneiki-variety-500ml.jpg&ehk=bjKMSEgLTTMLGR7B7m09vG8KiZcdVkjoXPxmdSuG7s4%3d&risl=&pid=ImgRaw&r=0" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill style={{ width: '50px', height: '50px', color: '#000' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Cotton Seed Oil</h2>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.vHvTfGK09P8NW2yhZHLCMgHaFj?rs=1&pid=ImgDetMain" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill  style={{ width: '50px', height: '50px', color: '#010' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Mustard Oil</h2>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.wTxKt030FO180405bJxsgwAAAA?w=400&h=300&rs=1&pid=ImgDetMain" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill style={{ width: '50px', height: '50px', color: '#000' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Soyabean Oil</h2>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7222f74048821.5c1f4ba4144bf.jpg" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill style={{ width: '50px', height: '50px', color: '#000' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Groundnut Oil</h2>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1269286286/photo/beard-oil-barbershop-product-photography-blank-lebel-on-brown-bottle.jpg?s=612x612&w=0&k=20&c=2x_Um4s7FFKmgxjfdFfGfcrraxzJlgNT9eYyRzbcYXE=" />
          <button className='add-to-cart-button'>
            <PiShoppingCartSimpleFill style={{ width: '50px', height: '50px', color: '#000' }} />
          </button>
          <h1 className="oil-price">₹299</h1>
          <h2 className="oil-name">Palm Oil</h2>
        </SwiperSlide>
        
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
      </div>
    </>
  );
}
