import React from 'react';
import { chatData } from '../data/dummy';
import { MdOutlineCancel } from 'react-icons/md';
import {useStateContext} from '../contexts/ContextProvider'

const Notification = () => {
  const {isClicked,handleClick} = useStateContext()
  return (
    <div className="shadow-md nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold '>Notification</h1>
        <button onClick={()=>handleClick({...isClicked,[isClicked.notification]:false})} style={{color:"rgb(153,171,180)",borderRadius:"50%"}}  className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'><MdOutlineCancel/></button>
      </div>
      <div>
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Notification