import React from 'react'

const CompleteTodo = (completed) => {
  console.log(completed);
  
  return (
    <>
      <div data-layer="Done" className="Done w-[352px] h-[826px] relative">
  <div data-layer="Box" className="Box w-[352px] h-[826px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/10" />
  <div data-layer="Tasks" className="Tasks w-80 h-[754px] left-[16px] top-[56px] absolute">
    <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-[192px] absolute bg-white rounded-xl border-2 border-[#1c1d22]/10" />
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[576px] absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/10" />
      <div data-layer="Drag your task here..." className="DragYourTaskHere left-[81px] top-[81px] absolute text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">Drag your task here...</div>
    </div>
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[384px] absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
      <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
        <div data-layer="Items" className="Items w-[66px] h-[30px] left-[214px] top-0 absolute">
          <div data-layer="Item" className="Item w-[30px] h-[30px] left-0 top-0 absolute">
            <div data-layer="Profile" className="Profile w-[30px] h-[30px] left-0 top-0 absolute">
              <div data-layer="Box" className="Box w-[30px] h-[30px] left-0 top-0 absolute bg-white rounded-full" />
              <img data-layer="Image" className="Image w-[30px] h-[42px] left-[-0px] top-[-8px] absolute" src="https://via.placeholder.com/30x42" />
            </div>
            <div data-layer="Border" className="Border w-[30px] h-[30px] left-0 top-0 absolute rounded-full border-2 border-white" />
          </div>
          <div data-layer="Item" className="Item w-[30px] h-[30px] left-[18px] top-0 absolute">
            <div data-layer="Profile" className="Profile w-[30px] h-[30px] left-0 top-0 absolute">
              <div data-layer="Box" className="Box w-[30px] h-[30px] left-0 top-0 absolute bg-white rounded-full" />
              <img data-layer="Image" className="Image w-[50px] h-8 left-[-10px] top-[-1px] absolute" src="https://via.placeholder.com/50x32" />
            </div>
            <div data-layer="Border" className="Border w-[30px] h-[30px] left-0 top-0 absolute rounded-full border-2 border-white" />
          </div>
          <div data-layer="Item" className="Item w-[30px] h-[30px] left-[36px] top-0 absolute">
            <div data-layer="Box" className="Box w-[30px] h-[30px] left-0 top-0 absolute bg-white rounded-full border-2 border-[#1c1d22]/10" />
            <div data-layer="+2" className="2 left-[8px] top-[9px] absolute text-[#1c1d22] text-xs font-bold font-['Exo 2'] leading-3">+2</div>
          </div>
        </div>
        <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#888da7]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div data-layer="8 Jan 2022" className="Jan2022 text-[#878ca6] text-sm font-semibold font-['Exo 2'] leading-[14px]">8 Jan 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-[280px] h-1 left-0 top-0 absolute bg-[#78d600] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="10/10" className="10 left-[243px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">10/10</div>
          <div data-layer="Title" className="Title w-[79px] h-4 left-0 top-0 absolute">
            <div data-layer="Progress" className="Progress left-[20px] top-[1px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Progress</div>
            <div data-layer="Icon" className="Icon w-4 h-4 px-[2.67px] py-1 left-0 top-[-0px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
      </div>
      <div data-layer="Top" className="Top w-[280px] h-9 left-[20px] top-[20px] absolute">
        <div data-layer="More" className="More w-[26px] h-[26px] left-[254px] top-0 absolute">
          <div data-layer="Box" className="Box w-[26px] h-[26px] left-0 top-0 absolute bg-white rounded-[14px] border-2 border-[#1c1d22]/10" />
          <div data-layer="Icon" className="Icon w-2.5 h-0.5 left-[8px] top-[12px] absolute">
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[8px] top-0 absolute bg-[#1c1d22] rounded-full" />
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[4px] top-0 absolute bg-[#1c1d22] rounded-full" />
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-0 top-0 absolute bg-[#1c1d22] rounded-full" />
          </div>
        </div>
        <div data-layer="Title" className="Title w-[156px] h-9 left-0 top-0 absolute">
          <div data-layer="Twitter marketing" className="TwitterMarketing left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Twitter marketing</div>
          <div data-layer="Make twitter banner" className="MakeTwitterBanner left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Make twitter banner</div>
        </div>
      </div>
    </div>
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[192px] absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
      <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
        <div data-layer="Right" className="Right w-[76px] h-[18px] left-[204px] top-[6px] absolute">
          <div data-layer="Attach" className="Attach w-[30px] h-[18px] left-[46px] top-0 absolute">
            <div data-layer="3" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">3</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] pl-[1.46px] pr-[1.43px] pt-[2.25px] pb-[2.29px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
          <div data-layer="Comment" className="Comment w-[34px] h-[18px] left-0 top-0 absolute">
            <div data-layer="17" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">17</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] px-[1.50px] pt-[3px] pb-[1.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
        <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#888da7]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div data-layer="7 Jan 2022" className="Jan2022 text-[#878ca6] text-sm font-semibold font-['Exo 2'] leading-[14px]">7 Jan 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-[280px] h-1 left-0 top-0 absolute bg-[#78d600] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="10/10" className="10 left-[243px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">10/10</div>
          <div data-layer="Title" className="Title w-[79px] h-4 left-0 top-0 absolute">
            <div data-layer="Progress" className="Progress left-[20px] top-[1px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Progress</div>
            <div data-layer="Icon" className="Icon w-4 h-4 px-[2.67px] py-1 left-0 top-[-0px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
      </div>
      <div data-layer="Top" className="Top w-[280px] h-9 left-[20px] top-[20px] absolute">
        <div data-layer="More" className="More w-[26px] h-[26px] left-[254px] top-0 absolute">
          <div data-layer="Box" className="Box w-[26px] h-[26px] left-0 top-0 absolute bg-white rounded-[14px] border-2 border-[#1c1d22]/10" />
          <div data-layer="Icon" className="Icon w-2.5 h-0.5 left-[8px] top-[12px] absolute">
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[8px] top-0 absolute bg-[#1c1d22] rounded-full" />
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[4px] top-0 absolute bg-[#1c1d22] rounded-full" />
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-0 top-0 absolute bg-[#1c1d22] rounded-full" />
          </div>
        </div>
        <div data-layer="Title" className="Title w-[201px] h-9 left-0 top-0 absolute">
          <div data-layer="Kickstarter campaign" className="KickstarterCampaign left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Kickstarter campaign</div>
          <div data-layer="Launch product promotion" className="LaunchProductPromotion left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Launch product promotion</div>
        </div>
      </div>
    </div>
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-0 absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
      <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
        <div data-layer="Right" className="Right w-[70px] h-[18px] left-[210px] top-[6px] absolute">
          <div data-layer="Attach" className="Attach w-[30px] h-[18px] left-[40px] top-0 absolute">
            <div data-layer="5" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">5</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] pl-[1.46px] pr-[1.43px] pt-[2.25px] pb-[2.29px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
          <div data-layer="Comment" className="Comment w-7 h-[18px] left-0 top-0 absolute">
            <div data-layer="1" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">1</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] px-[1.50px] pt-[3px] pb-[1.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
        <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#888da7]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div data-layer="6 Jan 2022" className="Jan2022 text-[#878ca6] text-sm font-semibold font-['Exo 2'] leading-[14px]">6 Jan 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-[280px] h-1 left-0 top-0 absolute bg-[#78d600] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="10/10" className="10 left-[243px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">10/10</div>
          <div data-layer="Title" className="Title w-[79px] h-4 left-0 top-0 absolute">
            <div data-layer="Progress" className="Progress left-[20px] top-[1px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Progress</div>
            <div data-layer="Icon" className="Icon w-4 h-4 px-[2.67px] py-1 left-0 top-[-0px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
      </div>
      <div data-layer="Top" className="Top w-[280px] h-9 left-[20px] top-[20px] absolute">
        <div data-layer="More" className="More w-[26px] h-[26px] left-[254px] top-0 absolute">
          <div data-layer="Box" className="Box w-[26px] h-[26px] left-0 top-0 absolute bg-white rounded-[14px] border-2 border-[#1c1d22]/10" />
          <div data-layer="Icon" className="Icon w-2.5 h-0.5 left-[8px] top-[12px] absolute">
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[8px] top-0 absolute bg-[#1c1d22] rounded-full" />
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-[4px] top-0 absolute bg-[#1c1d22] rounded-full" />
            <div data-layer="Vector" className="Vector w-0.5 h-0.5 left-0 top-0 absolute bg-[#1c1d22] rounded-full" />
          </div>
        </div>
        <div data-layer="Title" className="Title w-[198px] h-9 left-0 top-0 absolute">
          <div data-layer="Ui8 marketplace" className="Ui8Marketplace left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Ui8 marketplace</div>
          <div data-layer="Add product to the market" className="AddProductToTheMarket left-0 top-[-0px] absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Add product to the market</div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Top" className="Top w-80 h-[18px] left-[16px] top-[22px] absolute">
    <div data-layer="Add" className="Add w-[111px] h-[18px] left-[209px] top-0 absolute">
      <div data-layer="Add new task" className="AddNewTask left-[24px] top-[2px] absolute text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">Add new task</div>
      <div data-layer="Icon" className="Icon w-[18px] h-[18px] left-0 top-0 absolute">
        <div data-layer="Box" className="Box w-[18px] h-[18px] left-0 top-0 absolute bg-[#1c1d22]/10 rounded-full" />
        <div data-layer="Icon" className="Icon opacity-40 w-1.5 h-1.5 left-[6px] top-[6px] absolute">
        </div>
      </div>
    </div>
    <div data-layer="Done (3)" className="Done3 left-0 top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Done (3)</div>
  </div>
</div>
    </>
  )
}

export default CompleteTodo
