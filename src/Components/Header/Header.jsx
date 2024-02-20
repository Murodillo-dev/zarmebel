import React from 'react'
import zar from './zar.png'
import img1 from './img1.png'
import img2 from './img2.png'
import sofa from './sofa.png'

import { Carousel } from 'antd';
const contentStyle = {
  height: '500px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};


const Header = () => {
  return (
    <div >

      <div className="navbar w-[100%] h-auto py-4 px-8 box-border bg-[#0F1B03] flex justify-between flex-wrap items-center">
        <a href="" className='brand'><img className='w-[50px] h-[50px]' src={zar} alt="" /></a>

        <ul className='navLink text-white flex justify-start flex-wrap items-center gap-12'>
          <li><a href="">Bosh sahifa</a></li>
          <li><a href="">Biz haqimizda</a></li>
          <li><a href="">Bog’lanish</a></li>
        </ul>

        <ul className='navIcon flex justify-start flex-wrap items-center gap-8 text-[20px] text-white'>
          <li><a href=""><i class="fa-solid fa-phone"></i></a></li>
          <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
          <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
      </div>

      <div className="carousel ">
        <Carousel autoplay
          autoplaySpeed={2000}
          speed = {1000}
        >
          <div>
            <div style={{ ...contentStyle, backgroundImage: `url(${img1})`, backgroundSize: 'cover' ,backgroundPosition: 'center center' }}></div>
          </div>
          <div >
            <div style={{ ...contentStyle, backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          </div>
          <div >
            <div style={{ ...contentStyle, backgroundImage: `url(${sofa})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          </div>
          <div >
            <div style={{ ...contentStyle, backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          </div>
        </Carousel>
      </div>

    </div>
  )
}

export default Header