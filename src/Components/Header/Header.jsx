import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Button, Drawer } from 'antd';
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

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div >

      <div className="navbar w-[100%] h-auto py-4 px-8 box-border bg-[#0F1B03] flex justify-between flex-wrap items-center">
        <NavLink to="/" className='brand'><img className='w-[50px] h-[50px]' src={zar} alt="" /></NavLink>

        <ul className='navLink text-white flex justify-start flex-wrap items-center gap-12'>
          <li><NavLink to="/">Bosh sahifa</NavLink></li>
          <li><a href="">Biz haqimizda</a></li>
          <li><a href="">Bog’lanish</a></li>
        </ul>

        <ul className='navIcon flex justify-start flex-wrap items-center gap-8 text-[20px] text-white'>
          <li><a href=""><i class="fa-solid fa-phone"></i></a></li>
          <li><a target="_blank" href="https://t.me/mebelzarmebel"><i class="fa-brands fa-telegram"></i></a></li>
          <li><a target="_blank" href="https://www.instagram.com/zarmebel.toshkent?igsh=bXhtYzkzaHNkbnh6"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
        </ul>

        <div className="menu">

          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>

      </div>

      <div className="carousel ">
        <Carousel autoplay
          autoplaySpeed={2000}
          speed={1000}
          waitForAnimate:true
        >
          <div>
            <div style={{ ...contentStyle, backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
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

      <h1 className="text-black text-4xl font-bold text-center mt-[50px]">
        OMMABOP TOIFALAR
      </h1>

      <div className="categories w-[100%]">
        <ul className="text-black text-xl font-semibold flex justify-between flex-wrap mt-[50px]">
          <li className=' categories hover:text-white  duration-500 hover:bg-[#0F1B03]  rounded-[15px] py-4 px-6 '><NavLink to="/">Spalniy</NavLink></li>
          <li className=' categories hover:text-white  duration-500 hover:bg-[#0F1B03]  rounded-[15px] py-4 px-6 '><NavLink to="stolstul">Stol Stul</NavLink></li>
          <li className=' categories hover:text-white  duration-500 hover:bg-[#0F1B03]  rounded-[15px] py-4 px-6 '><NavLink to="yumshiq">Yumshoq mebel  </NavLink></li>
          <li className=' categories hover:text-white  duration-500 hover:bg-[#0F1B03]  rounded-[15px] py-4 px-6 '><NavLink to="shkaf">Shkaf</NavLink></li>
          <li className=' categories hover:text-white  duration-500 hover:bg-[#0F1B03]  rounded-[15px] py-4 px-6 '><NavLink to="penal">Penal Komod</NavLink></li>
          <li className=' categories hover:text-white  duration-500 hover:bg-[#0F1B03]  rounded-[15px] py-4 px-6 '><NavLink to="toqilgan">To’qilgan Stol Stul</NavLink></li>
        </ul>
      </div>

    </div>
  )
}

export default Header