import React from 'react'
import LoadingImage from "../../assets/Images/Saly-10.png"
import Button from '../../Components/Button/Button'
import { useSelector,useDispatch } from 'react-redux';
import { displayLandingPage } from '../../Features/TodoApi/TodoApiSlice';

const LoadingScreen = () => {
  const display = useSelector(state => state?.todo?.state ?? true);
  const dispatch = useDispatch();

  if (!display) return null; // ✅ Hide when state is false

  return (
    <>
    
 <div className='w-full h-screen bg-white flex overflow-y-hidden justify-center p-3 '>
        <div className="todoContent h-[500px] w-[50%] flex flex-col justify-between  border-white rounded-tl-2xl rounded-bl-2xl">
           <div className="logo w-fit h-[64px] justify-center items-center flex">
                <h2 className='w-full px-3 flex text-2xl font-bold'><span className='text-blue-600'>Todo</span>Web</h2>
           </div>
          <h1 className='capitalize text-6xl font-bold m-4 leading-20'><span className='font-extrabold text-blue-600'>Organize</span> Your Task and ideas easily </h1>
          <div>  <Button  click={()=>dispatch(displayLandingPage())} text="Get Started" /></div>
        </div>
      <img src={LoadingImage} className='h-[500px] w-[40%]' alt="loading_screen" />
    </div>
    </>
  )
}

export default LoadingScreen
