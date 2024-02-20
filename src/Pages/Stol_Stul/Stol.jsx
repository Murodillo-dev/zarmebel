import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Stol = () => {
    const [url, setUrl] = useState('http://localhost:3000/stol')
    const [api, setApi] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setApi(response.data)
            })
    }, [])

    const [info, setInfo]   = useState('')
    function fullInfo(parametr) {
        setInfo(parametr)
    }
    console.log(info);

    return (
        <div className='stol w-[100%] h-auto pt-10 pb-24 px-14 flex justify-between flex-wrap'>
            {
                api.map((value) => {
                    return (
                        <div onClick={() => fullInfo(value.id)} className="card max-w-[300px] w-[100%] h-auto bg-[#0F1B03] mt-10 rounded-[15px] overflow-hidden ">
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