import React from 'react'

const UpperMenu = () => {
  return (
    <>
      <div data-layer="Menu" className="Menu w-[1092px] h-[50px] relative">
  <div data-layer="Right" className="Right w-[286px] h-[38px] left-[806px] top-0 absolute">
    <div data-layer="Button" className="Button h-[38px] px-6 py-3 left-[146px] top-0 absolute bg-[#1c1d22] rounded-[19px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
      <div data-layer="New template" className="NewTemplate text-white text-sm font-semibold font-['Exo 2'] leading-[14px]">New template</div>
    </div>
    <div data-layer="Sort" className="Sort left-[56px] top-[11px] absolute text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">Sort</div>
    <div data-layer="Filter" className="Filter left-0 top-[11px] absolute text-[#1c1d22] text-base font-semibold font-['Exo 2'] leading-none">Filter</div>
    <div data-layer="More" className="More w-[26px] h-[26px] left-[104px] top-[6px] absolute">
      <div data-layer="Box" className="Box w-[26px] h-[26px] left-0 top-0 absolute bg-white rounded-[14px] border-2 border-[#1c1d22]/10" />
      <div data-layer="Icon" className="Icon w-2.5 h-0.5 left-[8px] top-[12px] absolute">
        <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[8px] top-0 absolute bg-[#1c1d22] rounded-full" />
        <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[4px] top-0 absolute bg-[#1c1d22] rounded-full" />
        <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-0 top-0 absolute bg-[#1c1d22] rounded-full" />
      </div>
    </div>
  </div>
  <div data-layer="Items" className="Items w-[259px] h-9 left-0 top-[14px] absolute">
    <div data-layer="Item" className="Item w-[122px] h-9 left-[137px] top-0 absolute">
      <div data-layer="Content" className="Content w-[94px] h-[18px] left-[14px] top-0 absolute">
        <div data-layer="Add view" className="AddView left-[26px] top-[1px] absolute text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">Add view</div>
        <div data-layer="Icon" className="Icon w-[18px] h-[18px] left-0 top-0 absolute">
          <div data-layer="Box" className="Box w-[18px] h-[18px] left-0 top-0 absolute bg-[#1c1d22]/10 rounded-full" />
          <div data-layer="Icon" className="Icon opacity-40 w-1.5 h-1.5 left-[6px] top-[6px] absolute">
          </div>
        </div>
      </div>
    </div>
    <div data-layer="Item" className="Item w-[137px] h-9 left-0 top-0 absolute">
      <div data-layer="Content" className="Content w-[109px] h-[18px] left-[14px] top-0 absolute">
        <div data-layer="Board view" className="BoardView left-[26px] top-[1px] absolute text-[#1c1d22] text-base font-semibold font-['Exo 2'] leading-none">Board view</div>
        <div data-layer="Icon" className="Icon w-[18px] h-[18px] p-[2.25px] left-0 top-0 absolute justify-center items-center inline-flex overflow-hidden" />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default UpperMenu
