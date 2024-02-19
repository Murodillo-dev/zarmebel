import React from 'react'
import zar from './zar.png'

import { Carousel } from 'antd';
const contentStyle = {
  height: '600px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  backgroundImage: `url(${zar})`,
  backgroundSize: 'cover',
};


const Header = () => {
  return (
    <div >

      <div className="navbar w-[100%] h-auto py-4 px-8 box-border bg-[#0F1B03] flex justify-between flex-wrap items-center">
        <a href="" className='brand'><img className='w-[70px] h-[70px]' src={zar} alt="" /></a>

        <ul className='navLink text-white flex justify-start flex-wrap items-center gap-12'>
          <li><a href="">Bosh sahifa</a></li>
          <li><a href="">Biz haqimizda</a></li>
          <li><a href="">Bog’lanish</a></li>
        </ul>

        <ul className='navIcon flex justify-start flex-wrap items-center gap-8 text-[25px] text-white'>
          <li><a href=""><i class="fa-solid fa-phone"></i></a></li>
          <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
          <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
      </div>

      <Carousel autoplay>
        <div>
          <div style={{ ...contentStyle }}>1</div>
        </div>
        <div >
          <div style={{ ...contentStyle }}>2</div>
        </div>
        <div >
          <div style={{ ...contentStyle }}>3</div>
        </div>
        <div >
          <div style={{ ...contentStyle }}>4</div>
        </div>
      </Carousel>

    </div>
  )
}

export default Header