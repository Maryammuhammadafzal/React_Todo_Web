import React from 'react'

const AddTodo = () => {
  return (
    <div>
      <div data-layer="To do" className="ToDo w-[360px] h-[826px] relative">
  <div data-layer="Box" className="Box w-[352px] h-[826px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/10" />
  <div data-layer="Tasks" className="Tasks w-[344px] h-[754px] left-[16px] top-[56px] absolute">
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[576px] absolute">
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
          <div data-layer="27 Aug 2022" className="Aug2022 text-[#878ca6] text-sm font-semibold font-['Exo 2'] leading-[14px]">27 Aug 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-14 h-1 left-0 top-0 absolute bg-[#ff7979] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="2/14" className="14 left-[249px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">2/14</div>
          <div data-layer="Title" className="Title w-[79px] h-4 left-0 top-0 absolute">
            <div data-layer="Progress" className="Progress left-[20px] top-[1px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Progress</div>
            <div data-layer="Icon" className="Icon w-4 h-4 px-[2.67px] py-1 left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
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
        <div data-layer="Title" className="Title w-[211px] h-9 left-0 top-0 absolute">
          <div data-layer="Twitter marketing" className="TwitterMarketing left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Twitter marketing</div>
          <div data-layer="Create a tweet and promote" className="CreateATweetAndPromote left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Create a tweet and promote</div>
        </div>
      </div>
    </div>
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[384px] absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
      <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
        <div data-layer="Right" className="Right w-[73px] h-[18px] left-[207px] top-[6px] absolute">
          <div data-layer="Attach" className="Attach w-[31px] h-[18px] left-[42px] top-0 absolute">
            <div data-layer="4" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">4</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] pl-[1.46px] pr-[1.43px] pt-[2.25px] pb-[2.29px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
          <div data-layer="Comment" className="Comment w-[30px] h-[18px] left-0 top-0 absolute">
            <div data-layer="6" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">6</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] px-[1.50px] pt-[3px] pb-[1.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
        <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#ffa048]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div data-layer="26 Aug 2022" className="Aug2022 text-[#ff9f48] text-sm font-semibold font-['Exo 2'] leading-[14px]">26 Aug 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-[84px] h-1 left-0 top-0 absolute bg-[#ff7979] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="3/10" className="10 left-[250px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">3/10</div>
          <div data-layer="Title" className="Title w-[79px] h-4 left-0 top-0 absolute">
            <div data-layer="Progress" className="Progress left-[20px] top-[1px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Progress</div>
            <div data-layer="Icon" className="Icon w-4 h-4 px-[2.67px] py-1 left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
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
        <div data-layer="Title" className="Title w-[202px] h-9 left-0 top-0 absolute">
          <div data-layer="Dropbox mobile app" className="DropboxMobileApp left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Dropbox mobile app</div>
          <div data-layer="Design few mobile screens" className="DesignFewMobileScreens left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Design few mobile screens</div>
        </div>
      </div>
    </div>
    <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-[192px] absolute bg-white rounded-xl border-2 border-[#1c1d22]/10" />
    <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-0 absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
      <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
        <div data-layer="Right" className="Right w-[71px] h-[18px] left-[209px] top-[6px] absolute">
          <div data-layer="Attach" className="Attach w-[30px] h-[18px] left-[41px] top-0 absolute">
            <div data-layer="2" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">2</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] pl-[1.46px] pr-[1.43px] pt-[2.25px] pb-[2.29px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
          <div data-layer="Comment" className="Comment w-[29px] h-[18px] left-0 top-0 absolute">
            <div data-layer="7" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">7</div>
            <div data-layer="Icon" className="Icon w-[18px] h-[18px] px-[1.50px] pt-[3px] pb-[1.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
        <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#888da7]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div data-layer="24 Aug 2022" className="Aug2022 text-[#878ca6] text-sm font-semibold font-['Exo 2'] leading-[14px]">24 Aug 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-[196px] h-1 left-0 top-0 absolute bg-[#ff9f48] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="7/10" className="10 left-[250px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">7/10</div>
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
        <div data-layer="Title" className="Title w-[207px] h-9 left-0 top-0 absolute">
          <div data-layer="Dribbble marketing" className="DribbbleMarketing left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Dribbble marketing</div>
          <div data-layer="Design new ui presentation" className="DesignNewUiPresentation left-0 top-[-0px] absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Design new ui presentation</div>
        </div>
      </div>
    </div>
    <div data-layer="Task" className="Task w-80 h-[178px] left-[24px] top-[168px] absolute">
      <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl shadow-[6px_20px_36px_0px_rgba(28,29,34,0.10)]" />
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
        <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#ff7979]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
          <div data-layer="25 Aug 2022" className="Aug2022 text-[#ff7979] text-sm font-semibold font-['Exo 2'] leading-[14px]">25 Aug 2022</div>
        </div>
      </div>
      <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
        <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
          <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
          <div data-layer="Fill" className="Fill w-28 h-1 left-0 top-0 absolute bg-[#ff9f48] rounded-sm" />
        </div>
        <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
          <div data-layer="4/10" className="10 left-[249px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">4/10</div>
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
        <div data-layer="Title" className="Title w-[189px] h-9 left-0 top-0 absolute">
          <div data-layer="Pinterest promotion" className="PinterestPromotion left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Pinterest promotion</div>
          <div data-layer="Add more ui/ux mockups" className="AddMoreUiUxMockups left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Add more ui/ux mockups</div>
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
    <div data-layer="To do (4)" className="ToDo4 left-0 top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">To do (4)</div>
  </div>
</div>
    </div>
  )
}

export default AddTodo
