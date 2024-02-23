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
        <NavLink to="/" ><img className=' brand w-[50px] h-[50px]' src={zar} alt="" /></NavLink>

        <ul className='navLink text-white flex justify-start flex-wrap items-center gap-12'>
          <li><NavLink to="/">Bosh sahifa</NavLink></li>
          <li><NavLink to="">Biz haqimizda</NavLink></li>
          <li><NavLink to="">Xizmatlar</NavLink></li>
        </ul>

        <ul className='navIcon flex justify-start flex-wrap items-center gap-8 text-[20px] text-white'>
          <li><a href=""><i class="fa-solid fa-phone"></i></a></li>
          <li><a target="_blank" href="https://t.me/mebelzarmebel"><i class="fa-brands fa-telegram"></i></a></li>
          <li><a target="_blank" href="https://www.instagram.com/zarmebel.toshkent?igsh=bXhtYzkzaHNkbnh6"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
        </ul>

        <div className="menu">

          <Button className='bg-[#0F1B03] border-b-none' type="primary" onClick={showDrawer}>
            <i class="fa-solid fa-bars text-[20px]"></i>
          </Button>
          <Drawer width={320} style={{}} title="Bog'lanish" onClose={onClose} open={open}>
            <div className="drawer h-[100%] bg-red">
              <ul className='navLink992 text-2xl text-black font-medium flex justify-start flex-wrap items-center gap-12'>
                <li className='my-[10px]'><NavLink to="/">Bosh sahifa</NavLink></li>
                <li className='my-[10px]'><NavLink to="">Biz haqimizda</NavLink></li>
                <li className='my-[10px]'><NavLink to="">Xizmatlar</NavLink></li>
              </ul>
              <div className="line border-gray-500 border-[0.75px] my-2"></div>
              <ul className='text-2xl font-medium'>
                <li className='my-[10px]'><a href=""><i class=" mr-2 fa-solid fa-phone"></i>+998942288778</a></li>
                <li className='my-[10px]'><a target="_blank" href="https://t.me/mebelzarmebel"><i class=" mr-2 fa-brands fa-telegram"></i>Zarmebel</a></li>
                <li className='my-[10px]'><a target="_blank" href="https://www.instagram.com/zarmebel.toshkent?igsh=bXhtYzkzaHNkbnh6"><i class=" mr-2 fa-brands fa-instagram"></i>Zarmebel</a></li>
              </ul>
            </div>
          </Drawer>
        </div>

      </div>

      <div className="carousel ">
        <Carousel autoplay
          autoplaySpeed={2000}
          speed={1000}
          waitForAnimate:true
          height={200}
        >

          <div>
            <img className='carousel__image' src={img1} alt="" />
          </div>
          <div >
            <img className='carousel__image' src={img1} alt="" />
          </div>
          <div >
            <img className='carousel__image' src={sofa} alt="" />
          </div>


          {/* <div>
            <div style={{ ...contentStyle, backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center center', objectFit: 'cover' }}></div>
          </div>
          <div >
            <div style={{ ...contentStyle, backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundPosition: 'center center', objectFit: 'cover' }}></div>
          </div>
          <div >
            <div style={{ ...contentStyle, backgroundImage: `url(${sofa})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          </div>
          <div >
            <div style={{ ...contentStyle, backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          </div> */}
        </Carousel>
      </div>

      <h1 className="popular text-black text-4xl font-bold text-center mt-[50px]">
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