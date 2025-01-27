import React from 'react'

const UpperNavbar = () => {
  return (
    <>
      <div data-layer="Header" className="Header w-[1156px] h-[94px] relative">
  <div data-layer="Content" className="Content w-[1092px] h-9 left-[32px] top-[29px] absolute">
    <div data-layer="Right" className="Right w-[269px] h-9 left-[823px] top-0 absolute">
      <div data-layer="Profile" className="Profile w-9 h-9 left-[233px] top-0 absolute">
        <div data-layer="Box" className="Box w-9 h-9 left-0 top-0 absolute bg-white rounded-full" />
        <img data-layer="Image" className="Image w-[78px] h-[52px] left-[-21px] top-[-8px] absolute" src="https://via.placeholder.com/78x52" />
      </div>
      <div data-layer="Calender" className="Calender w-[123px] h-[22px] left-[88px] top-[7px] absolute">
        <div data-layer="19 May 2022" className="May2022 left-[30px] top-[3px] absolute text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">19 May 2022</div>
        <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[2.75px] pt-[1.83px] pb-[2.75px] left-0 top-0 absolute justify-center items-center inline-flex overflow-hidden" />
      </div>
      <div data-layer="Notifications" className="Notifications w-[22px] h-[22px] left-[44px] top-[7px] absolute">
        <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[2.75px] py-[1.83px] left-0 top-0 absolute justify-center items-center inline-flex overflow-hidden" />
        <div data-layer="Badge" className="Badge w-1.5 h-1.5 left-[14px] top-[2px] absolute bg-[#ff9f48] rounded-full border border-white" />
      </div>
      <div data-layer="Search" className="Search w-[22px] h-[22px] p-[1.83px] left-0 top-[7px] absolute justify-center items-center inline-flex overflow-hidden" />
    </div>
    <div data-layer="Welcome back, Vincent 👋" className="WelcomeBackVincent left-0 top-[8px] absolute text-[#1c1d22] text-xl font-bold font-['Exo 2'] leading-tight">Welcome back, Vincent 👋</div>
  </div>
</div>
    </>
  )
}

export default UpperNavbar
