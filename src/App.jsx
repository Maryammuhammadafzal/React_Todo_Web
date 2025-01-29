import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompleteTodo from './Components/Todo/Todorows/CompleteTodo/CompleteTodo'
import ProgressTodo from './Components/Todo/Todorows/ProgressTodo/ProgressTodo'
import AddTodo from './Components/Todo/Todorows/AddTodo/AddTodo'
import UpperMenu from './Components/UpperMenu/UpperMenu'
import UpperNavbar from './Components/UpperNavbar/UpperNavbar'
import SideMenu from './Components/SideMenu/SideMenu'
import SideNavbar from './Components/SideNavabar/SideNavbar'
import Todo from './Components/Todo/Todo'

// import { useSelector,useDispatch } from 'react-redux';
// import { getTodo , addTodo , updateTodo , deleteTodo } from './Features/TodoApi/TodoApiSlice'

function App() {
//   const todo = useSelector(state=>state?.todos.value)
//   console.log(todo);
  
//   const dispatch = useDispatch()
//   const getAllTodo = ()=> {
//     dispatch(getTodo())
//   }
// setTimeout(()=>{
//   getAllTodo()
  
// },2000)
  return (
    <>
    
      <div data-layer="Light mode" className="LightMode w-full overflow-hidden h-screen flex bg-white">
 <div className="side w-1/4 h-screen flex shadow-md">
 <SideNavbar/>
 <SideMenu/>
 </div>
 <div className="dashboard w-3/4 h-screen flex flex-col space-y-3 gap-2 justify-center bg-amber-100">
  <UpperNavbar/>
  <div className="inner w-full m-2 flex flex-col h-fit gap-2">
  <UpperMenu/>
   <div className="todorows w-full m-2 flex h-fit gap-2">
  {/* <AddTodo/>
  <ProgressTodo/> 
   <CompleteTodo/>  */}
   <Todo/>
   </div>
  </div>

 
  
 </div>
 
  
</div>
    </>
  )
}

export default App

// Add Todo
  {/* <div data-layer="To do" className="ToDo w-[360px] h-[826px] left-[440px] top-[164px] absolute">
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
  </div> */}

  // Progress Todo
   {/* <div data-layer="In progress" className="InProgress w-[352px] h-[826px] left-[814px] top-[164px] absolute">
    <div data-layer="Box" className="Box w-[352px] h-[826px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/10" />
    <div data-layer="Tasks" className="Tasks w-80 h-[754px] left-[16px] top-[56px] absolute">
      <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[576px] absolute">
        <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
        <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
          <div data-layer="Right" className="Right w-[84px] h-[18px] left-[196px] top-[6px] absolute">
            <div data-layer="Attach" className="Attach w-[35px] h-[18px] left-[49px] top-0 absolute">
              <div data-layer="12" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">12</div>
              <div data-layer="Icon" className="Icon w-[18px] h-[18px] pl-[1.46px] pr-[1.43px] pt-[2.25px] pb-[2.29px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
            </div>
            <div data-layer="Comment" className="Comment w-[37px] h-[18px] left-0 top-0 absolute">
              <div data-layer="23" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">23</div>
              <div data-layer="Icon" className="Icon w-[18px] h-[18px] px-[1.50px] pt-[3px] pb-[1.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
            </div>
          </div>
          <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#ffa048]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div data-layer="15 Nov 2022" className="Nov2022 text-[#ff9f48] text-sm font-semibold font-['Exo 2'] leading-[14px]">15 Nov 2022</div>
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
          <div data-layer="Title" className="Title w-[169px] h-9 left-0 top-0 absolute">
            <div data-layer="Crypto mobile app" className="CryptoMobileApp left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Crypto mobile app </div>
            <div data-layer="Create ui kit for layout" className="CreateUiKitForLayout left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Create ui kit for layout</div>
          </div>
        </div>
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
          <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#ff7979]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div data-layer="14 Nov 2022" className="Nov2022 text-[#ff7979] text-sm font-semibold font-['Exo 2'] leading-[14px]">14 Nov 2022</div>
          </div>
        </div>
        <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
          <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
            <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
            <div data-layer="Fill" className="Fill w-28 h-1 left-0 top-0 absolute bg-[#ff7979] rounded-sm" />
          </div>
          <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
            <div data-layer="4/10" className="10 left-[249px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">4/10</div>
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
          <div data-layer="Title" className="Title w-[216px] h-9 left-0 top-0 absolute">
            <div data-layer="Oreo ios app project" className="OreoIosAppProject left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Oreo ios app project</div>
            <div data-layer="Create wireframe for ios app" className="CreateWireframeForIosApp left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Create wireframe for ios app</div>
          </div>
        </div>
      </div>
      <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-[192px] absolute">
        <div data-layer="Box" className="Box w-80 h-[178px] left-0 top-0 absolute bg-white rounded-xl border-2 border-[#1c1d22]/5" />
        <div data-layer="Bottom" className="Bottom w-[280px] h-[30px] left-[20px] top-[128px] absolute">
          <div data-layer="Right" className="Right w-[77px] h-[18px] left-[203px] top-[6px] absolute">
            <div data-layer="Attach" className="Attach w-[35px] h-[18px] left-[42px] top-0 absolute">
              <div data-layer="13" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">13</div>
              <div data-layer="Icon" className="Icon w-[18px] h-[18px] pl-[1.46px] pr-[1.43px] pt-[2.25px] pb-[2.29px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
            </div>
            <div data-layer="Comment" className="Comment w-[30px] h-[18px] left-0 top-0 absolute">
              <div data-layer="2" className="left-[22px] top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Baloo 2'] leading-[14px]">2</div>
              <div data-layer="Icon" className="Icon w-[18px] h-[18px] px-[1.50px] pt-[3px] pb-[1.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
            </div>
          </div>
          <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#888da7]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div data-layer="13 Nov 2022" className="Nov2022 text-[#878ca6] text-sm font-semibold font-['Exo 2'] leading-[14px]">13 Nov 2022</div>
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
          <div data-layer="Title" className="Title w-[172px] h-9 left-0 top-0 absolute">
            <div data-layer="Oreo branding project" className="OreoBrandingProject left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Oreo branding project</div>
            <div data-layer="Create brand guideline" className="CreateBrandGuideline left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Create brand guideline</div>
          </div>
        </div>
      </div>
      <div data-layer="Task" className="Task w-80 h-[178px] left-0 top-0 absolute">
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
          <div data-layer="Date" className="Date h-[30px] px-4 py-2 left-0 top-0 absolute bg-[#ff7979]/10 rounded-[17px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div data-layer="12 Nov 2022" className="Nov2022 text-[#ff7979] text-sm font-semibold font-['Exo 2'] leading-[14px]">12 Nov 2022</div>
          </div>
        </div>
        <div data-layer="Progress" className="Progress w-[280px] h-[30px] left-[20px] top-[78px] absolute">
          <div data-layer="Slider" className="Slider w-[280px] h-1 left-0 top-[26px] absolute">
            <div data-layer="Box" className="Box w-[280px] h-1 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-sm" />
            <div data-layer="Fill" className="Fill w-[84px] h-1 left-0 top-0 absolute bg-[#ff9f48] rounded-sm" />
          </div>
          <div data-layer="Top" className="Top w-[280px] h-4 left-0 top-0 absolute">
            <div data-layer="3/10" className="10 left-[250px] top-[1px] absolute text-right text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">3/10</div>
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
          <div data-layer="Title" className="Title w-[168px] h-9 left-0 top-0 absolute">
            <div data-layer="Oreo website project" className="OreoWebsiteProject left-0 top-[22px] absolute text-[#1c1d22]/50 text-sm font-medium font-['Exo 2'] leading-[14px]">Oreo website project</div>
            <div data-layer="Design system update" className="DesignSystemUpdate left-0 top-[-0px] absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Design system update</div>
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
      <div data-layer="In progress (4)" className="InProgress4 left-0 top-[2px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">In progress (4)</div>
    </div>
  </div> */}

  // CompleteTodo
 {/* <div data-layer="Done" className="Done w-[352px] h-[826px] left-[1180px] top-[164px] absolute">
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
  </div> */}

  // Upper Menu

 {/* <div data-layer="Menu" className="Menu w-[1092px] h-[50px] left-[440px] top-[94px] absolute">
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
  </div> */}

  // Upper navbar
{/* <div data-layer="Header" className="Header w-[1156px] h-[94px] left-[408px] top-0 absolute">
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
  </div> */} 

  // side menu 
   {/* <div data-layer="Projects" className="Projects w-[318px] h-[1022px] left-[90px] top-0 absolute">
    <div data-layer="Mode" className="Mode w-[262px] h-[42px] left-[28px] top-[952px] absolute">
      <div data-layer="Box" className="Box w-[262px] h-[42px] left-0 top-0 absolute bg-[#1c1d22]/5 rounded-[22px]" />
      <div data-layer="Items" className="Items w-[254px] h-[34px] left-[4px] top-[4px] absolute">
        <div data-layer="Item" className="Item w-[127px] h-[34px] left-[127px] top-0 absolute">
          <div data-layer="Box" className="Box w-[127px] h-[34px] left-0 top-0 absolute rounded-[18px]" />
          <div data-layer="Content" className="Content w-[57px] h-5 left-[35px] top-[7px] absolute">
            <div data-layer="Dark" className="Dark left-[26px] top-[3px] absolute text-[#1c1d22]/50 text-sm font-semibold font-['Exo 2'] leading-[14px]">Dark</div>
            <div data-layer="Icon" className="Icon w-5 h-5 p-[2.50px] left-0 top-0 absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
        <div data-layer="Item" className="Item w-[127px] h-[34px] left-0 top-0 absolute">
          <div data-layer="Box" className="Box w-[127px] h-[34px] left-0 top-0 absolute bg-white rounded-[18px] shadow-[0px_8px_6px_0px_rgba(28,29,34,0.06)]" />
          <div data-layer="Content" className="Content w-[59px] h-5 left-[34px] top-[7px] absolute">
            <div data-layer="Light" className="Light left-[26px] top-[3px] absolute text-[#1c1d22] text-sm font-semibold font-['Exo 2'] leading-[14px]">Light</div>
            <div data-layer="Icon" className="Icon w-5 h-5 p-[1.67px] left-0 top-0 absolute justify-center items-center inline-flex overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
    <div data-layer="Items" className="Items w-[261px] h-[572px] left-[28px] top-[100px] absolute">
      <div data-layer="Item" className="Item w-[261px] h-4 left-0 top-[556px] absolute">
        <div data-layer="Messengers" className="Messengers left-0 top-0 absolute text-[#1c1d22]/50 text-base font-bold font-['Exo 2'] leading-none">Messengers</div>
      </div>
      <div data-layer="Item" className="Item w-[261px] h-4 left-0 top-[512px] absolute">
        <div data-layer="Reminders" className="Reminders left-0 top-0 absolute text-[#1c1d22]/50 text-base font-bold font-['Exo 2'] leading-none">Reminders</div>
      </div>
      <div data-layer="Item" className="Item w-[261px] h-[206px] left-0 top-[278px] absolute">
        <div data-layer="Sub" className="Sub w-[169px] h-[174px] left-[1px] top-[32px] absolute">
          <div data-layer="Items" className="Items w-[146px] h-[174px] left-[23px] top-0 absolute">
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-[138px] absolute rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="Done (3)" className="Done3 text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">Done (3)</div>
            </div>
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-[92px] absolute bg-[#1c1d22]/5 rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="In progress (4)" className="InProgress4 text-[#1c1d22] text-base font-semibold font-['Exo 2'] leading-none">In progress (4)</div>
            </div>
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-[46px] absolute rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="To do (4)" className="ToDo4 text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">To do (4)</div>
            </div>
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-0 absolute rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="All tasks (11)" className="AllTasks11 text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">All tasks (11)</div>
            </div>
          </div>
          <div data-layer="Lines" className="Lines w-[15px] h-[174px] left-0 top-0 absolute">
          </div>
        </div>
        <div data-layer="Title" className="Title w-[261px] h-4 left-0 top-0 absolute">
          <div data-layer="Tasks" className="Tasks left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Tasks</div>
        </div>
      </div>
      <div data-layer="Item" className="Item w-[261px] h-[206px] left-0 top-[44px] absolute">
        <div data-layer="Sub" className="Sub w-[168px] h-[174px] left-[1px] top-[32px] absolute">
          <div data-layer="Items" className="Items w-[145px] h-[174px] left-[23px] top-0 absolute">
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-[138px] absolute rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="Ux research" className="UxResearch text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">Ux research</div>
            </div>
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-[92px] absolute rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="User flow" className="UserFlow text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">User flow</div>
            </div>
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-[46px] absolute bg-[#1c1d22]/5 rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="Design system" className="DesignSystem text-[#1c1d22] text-base font-semibold font-['Exo 2'] leading-none">Design system</div>
            </div>
            <div data-layer="Item" className="Item h-9 px-[18px] py-2.5 left-0 top-0 absolute rounded-[18px] justify-start items-start gap-2.5 inline-flex">
              <div data-layer="All projects (3)" className="AllProjects3 text-[#1c1d22]/50 text-base font-semibold font-['Exo 2'] leading-none">All projects (3)</div>
            </div>
          </div>
          <div data-layer="Lines" className="Lines w-[15px] h-[174px] left-0 top-0 absolute">
          </div>
        </div>
        <div data-layer="Title" className="Title w-[261px] h-4 left-0 top-0 absolute">
          <div data-layer="Projects" className="Projects left-0 top-0 absolute text-[#1c1d22] text-base font-bold font-['Exo 2'] leading-none">Projects</div>
        </div>
      </div>
      <div data-layer="Item" className="Item w-[261px] h-4 left-0 top-0 absolute">
        <div data-layer="Team" className="Team left-0 top-0 absolute text-[#1c1d22]/50 text-base font-bold font-['Exo 2'] leading-none">Team</div>
      </div>
    </div>
    <div data-layer="Title" className="Title w-[262px] h-[30px] left-[28px] top-[32px] absolute">
      <div data-layer="Icon" className="Icon w-7 h-7 left-[234px] top-[1px] absolute">
        <div data-layer="Box" className="Box w-7 h-7 left-0 top-0 absolute bg-[#1c1d22]/10 rounded-full" />
        <div data-layer="Icon" className="Icon opacity-40 w-2 h-2 left-[10px] top-[10px] absolute">
        </div>
      </div>
      <div data-layer="Projects️" className="Projects left-0 top-0 absolute text-[#1c1d22] text-3xl font-bold font-['Exo 2'] leading-[30px]">Projects️</div>
    </div>
  </div> */}

  // side nav
   {/* <div data-layer="Sidebar" className="Sidebar w-[90px] h-[1022px] left-0 top-0 absolute">
    <div data-layer="Box" className="Box w-[90px] h-[1022px] left-0 top-0 absolute bg-[#1b1d22]" />
    <div data-layer="Icon" className="Icon w-[22px] h-[22px] pl-[2.75px] pr-[1.83px] py-[2.75px] left-[34px] top-[966px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
    <div data-layer="Items" className="Items w-12 h-[407px] left-[21px] top-[131px] absolute">
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[3.67px] py-[2.75px] left-[13px] top-[385px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[1.83px] py-[2.75px] left-[13px] top-[323px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[1.83px] pt-[1.83px] pb-[2.75px] left-[13px] top-[261px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] p-[2.75px] left-[13px] top-[199px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[2.75px] pt-[1.83px] pb-[2.75px] left-[13px] top-[137px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] px-[2.75px] py-[1.83px] left-[13px] top-[75px] absolute opacity-50 justify-center items-center inline-flex overflow-hidden" />
      <div data-layer="Box" className="Box w-12 h-12 left-0 top-0 absolute bg-white/10 rounded-full" />
      <div data-layer="Icon" className="Icon w-[22px] h-[22px] p-[2.75px] left-[13px] top-[13px] absolute justify-center items-center inline-flex overflow-hidden" />
    </div>
    <div data-layer="Logo" className="Logo w-6 h-[26px] left-[33px] top-[70px] absolute">
    </div>
    <div data-layer="Ovals" className="Ovals w-[34px] h-1.5 left-[28px] top-[24px] absolute">
      <div data-layer="3" className="w-1.5 h-1.5 left-[28px] top-0 absolute bg-white/20 rounded-full" />
      <div data-layer="2" className="w-1.5 h-1.5 left-[14px] top-0 absolute bg-white/40 rounded-full" />
      <div data-layer="1" className="w-1.5 h-1.5 left-0 top-0 absolute bg-white rounded-full" />
    </div>
  </div> */}