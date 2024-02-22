import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Modal, Space } from 'antd';
// import Info from './Info'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Stol = () => {

    //bring the data
    const [url, setUrl] = useState('http://localhost:3000/stol')
    const [api, setApi] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setApi(response.data)
            })
    }, [])

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
                                        <div className='w-[100%] flex justify-start flex-wrap '>
                                            {
                                                value.id == id ?
                                                    <>
                                                        <div className="infoCarousel max-w-[400px] w-[100%] h-[450px] rounded-[15px] overflow-hidden">
                                                            <Swiper
                                                                slidesPerView={1}
                                                                spaceBetween={0}
                                                                loop={true}
                                                                pagination={{
                                                                    clickable: true,
                                                                }}
                                                                navigation={true}
                                                                modules={[Pagination, Navigation]}
                                                                className="mySwiper"
                                                            >
                                                                <SwiperSlide style={{
                                                                    backgroundImage: `url(${value.img})`,
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center center'
                                                                }}></SwiperSlide>
                                                                <SwiperSlide style={{
                                                                    backgroundImage: `url(${value.img})`,
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center center'
                                                                }}></SwiperSlide>
                                                                <SwiperSlide style={{
                                                                    backgroundImage: `url(${value.img})`,
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center center'
                                                                }}></SwiperSlide>
                                                                <SwiperSlide style={{
                                                                    backgroundImage: `url(${value.img})`,
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center center'
                                                                }}></SwiperSlide>
                                                            </Swiper>
                                                        </div>
                                                        <div className="buy ml-6">
                                                            <h1 className=" text-black text-2xl font-medium text-left  ">Nomi: {value.name}</h1>
                                                            <h1 className=" text-black text-3xl font-normal text-left mt-3">Narxi: {value.price * order}</h1>
                                                            <div className="count  w-[100%] flex justify-start gap-5 mt-4">
                                                                <button onClick={removeProduct} className="w-9 h-8 bg-zinc-300 bg-opacity-0 rounded border border-stone-950"><i class="fa-solid fa-chevron-down text-black text-2xl font-semibold"></i></button>
                                                                <input className="w-9 h-8 bg-zinc-300 bg-opacity-0 rounded border border-stone-950 outline-none text-center leading-8 text-black text-3xl font-semibold" value={order} />
                                                                <button onClick={addProduct} className="w-9 h-8 bg-zinc-300 bg-opacity-0 rounded border border-stone-950"><i class="fa-solid fa-chevron-up text-black text-2xl font-semibold"></i></button>
                                                            </div>
                                                            <div className="fornitureInfo mt-4 max-w-[320px] h-auto text-left ">
                                                                <p className='h-80 overflow-auto'>
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
                        <div key={value.id} onClick={() => showModal(value.id)} className="card max-w-[300px] w-[100%] h-auto bg-[#0F1B03] mt-10 rounded-[15px] overflow-hidden hover:cursor-pointer">
                            <div className="image w-[100%] h-[300px] "
                                style={{
                                    backgroundImage: `url(${value.img})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover'
                                }}></div>
                            <h1 className="text-neutral-50 text-lg font-bold mt-5 ml-3">Nomi: {value.name}</h1>
                            <h1 className="text-white text-xl font-medium mt-4 mb-5 ml-3">Narxi: {value.price} so'm</h1>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stol