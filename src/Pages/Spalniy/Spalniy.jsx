import React, { useRef, useEffect, useState } from 'react'
// import { data, info } from 'autoprefixer'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Modal, Space } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
};

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Spalniy = () => {

  //bring the data
  const [url, setUrl] = useState('http://34.68.97.86/api/products-bycategory/badroom')
  const [api, setApi] = useState([])
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setApi(response.data.products);
      })
  }, []);

  console.log(api);

  //Modal
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('')
  const showModal = (parametr) => {
    setOpen(true);
    setId(parametr)
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
    setOrder(1)
  };

  const [order, setOrder] = useState(1)
  function addProduct() {
    setOrder(order + 1)
  }

  function removeProduct() {
    if (order > 1) {
      setOrder(order - 1)
    }
  }

  return (
    <div className='stol w-[100%] h-auto pt-2 pb-16 px-14 flex justify-between flex-wrap'>
      <div className="modal absolute z-10">
        <Modal
          open={open}
          width={800}
          title="Mebel haqida to'liq ma'lumot"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={(_, { OkBtn, CancelBtn }) => (
            <>
              {
                api.map((value) => {
                  return (
                    <div className='card__info w-[100%] flex justify-start flex-wrap '>
                      {
                        value.id == id ?
                          <>
                            <div className="infoCarousel max-w-[400px] w-[100%] h-[450px] rounded-[15px] overflow-hidden">

                              <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                loop={true}
                                draggable={true}
                                pagination={{
                                  clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                              >
                                {value.images.map(e => {
                                  return (
                                    <SwiperSlide style={{
                                      backgroundImage: `url(${e})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center center'
                                    }}></SwiperSlide>
                                  )
                                })}
                              </Swiper>
                            </div>

                            <div className="buy ml-6">
                              <h1 className=" buy__name text-black text-2xl font-medium text-left  ">Nomi: {value.name}</h1>
                              <h1 className=" buy__price text-black text-3xl font-normal text-left mt-3">Narxi: {value.price * order}</h1>
                              <div className="count  w-[100%] flex justify-start gap-5 mt-4">
                                <button onClick={removeProduct} className=" product__plus w-9 h-8 bg-zinc-300 bg-opacity-0 rounded border border-stone-950"><i className="fa-solid fa-chevron-down down text-black text-2xl font-semibold"></i></button>
                                <input className=" product__count w-9 h-8 bg-zinc-300 bg-opacity-0 rounded border border-stone-950 outline-none text-center leading-8 text-black text-3xl font-semibold" value={order} />
                                <button onClick={addProduct} className=" product__plus w-9 h-8 bg-zinc-300 bg-opacity-0 rounded border border-stone-950"><i className="fa-solid fa-chevron-up up text-black text-2xl font-semibold"></i></button>
                              </div>
                              <div className="fornitureInfo mt-4 max-w-[320px] w-[100%] h-auto text-left ">
                                <p className=' buy__info h-80 overflow-auto'>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum autem assumenda aspernatur consequuntur atque similique. Nulla eveniet officia, nihil asperiores illum unde dolor voluptatum ea dolorum mollitia repudiandae laborum explicabo iste perspiciatis excepturi? Cupiditate saepe maxime molestiae cumque. Assumenda quisquam corrupti temporibus distinctio exercitationem veniam non, quis iure fugit nobis cupiditate cumque a eligendi voluptatem facere dicta iusto laboriosam repellendus saepe. Accusantium voluptatem natus quo inventore soluta dolorem perspiciatis ut nobis ducimus nesciunt maxime Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, explicabo nam incidunt voluptatum quo dolorem eligendi. Nihil, blanditiis ut. Sapiente minus tenetur ducimus eveniet iste reiciendis laboriosam non sed dolorum cupiditate! Distinctio cupiditate dignissimos sequi voluptatem? Animi, veritatis natus quisquam maiores ducimus error earum commodi, pariatur, eos omnis temporibus id.
                                </p>
                              </div>
                            </div>
                          </> :
                          null
                      }
                    </div>
                  )
                })
              }
            </>
          )}
        >

        </Modal>
      </div>
      {
        api.map((value) => {
          return (
            <div key={value.id} className="card border-cyan-500" onClick={() => showModal(value.id)}>
              <img src={value.images[0]} className="card-img-top" onError={(e) => console.error('Error loading image:', e)} />
              <div className="card-body">
                <h1 className=" product__name text-gray-700 text-lg font-bold mt-5 ml-3">Nomi: {value.name}</h1>
                <h1 className="product__price text-gray-700 text-xl font-medium mt-4 mb-5 ml-3">Narxi: {value.price_after_currency} so'm</h1>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Spalniy
