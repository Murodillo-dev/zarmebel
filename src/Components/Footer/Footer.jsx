import React from "react";
import logo from "./zar.png";

const Footer = () => {
  return (
    <div className=" footer w-[100%]  h-auto bg-[#0F1B03] py-1  flex justify-around  flex-wrap ">

      <div className="logo max-w-45  flex justify-start flex-wrap items-center">
        <div className="logo__left">
          <img className="zar__logo w-[110px]" src={logo} alt="" />
        </div>
        <div className="logo__right flex flex-col justify-between ml-3">
          <h1 className=" zarmebel text-white  text-3xl font-bold">
            <font className="font text-yellow-500 text-3xl font-bold ">Zar</font>
            mebel
          </h1>
          <p className="zar__info w-[300px] text-white text-lg font-medium">
            Mebel to’plamlarini tez va sifatli yetkazib, o’rnatib, beriladi
          </p>
        </div>
      </div>

      <div className="footer__left">
        <ul className="text-white text-base font-medium">
          <li className="list" ><a className="catolog text-white text-3xl font-medium" href="">Katalog</a></li>
          <li><a href="">Spalniy</a></li>
          <li><a href="">Stol Stul</a></li>
          <li><a href="">Yumshoq mebel</a></li>
          <li><a href="">Shkaf</a></li>
          <li><a href="">Penal Komod</a></li>
          <li><a href="">To’qilgan Stol Stul</a></li>
        </ul>
      </div>
      <div className="footer__right ">
        <ul className="text-white text-base font-medium">
          <li className="list" ><a className="contact text-white text-3xl font-medium" href="">Bog'lanish</a></li>
          <li><a href=""><i class=" mr-2 fa-solid fa-location-dot"></i>Manzil</a></li>
          <li><a href=""><i class=" mr-2 fa-solid fa-phone"></i>+998942288778</a></li>
          <li><a target="_blank" href="https://t.me/mebelzarmebel"><i class=" mr-2 fa-brands fa-telegram"></i>Zarmebel</a></li>
          <li><a target="_blank" href="https://www.instagram.com/zarmebel.toshkent?igsh=bXhtYzkzaHNkbnh6"><i class=" mr-2 fa-brands fa-instagram"></i>Zarmebel</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
