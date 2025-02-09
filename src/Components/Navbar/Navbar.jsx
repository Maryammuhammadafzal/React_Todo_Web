import Button from '../Button/Button'
import React , {useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import AddTodo from '../Todo/Todorows/AddTodo/AddTodo'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Navbar = () => {
         const [inputValue, setInputValue] = useState('');
               const dispatch = useDispatch();
             

 const showSwal = () => {
   withReactContent(Swal).fire({
     title: <i>Add Todo</i>,
     input: 'text',
     inputValue,
     preConfirm: () => {
       setInputValue(Swal.getInput()?.value || '')
     },
   })
 }



  return (
    <>
    
    

<nav class=" border-gray-200 bg-white h-[64px] w-[100%] flex justify-center items-center">
    <div class="flex flex-wrap justify-between items-center mx-auto  max-w-screen-xl p-2 w-[45%]">
        <a href="https://flowbite.com" class="w-fit flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TodoWeb</span>
        </a>
    </div>
        <div class="flex items-center  justify-end pr-3 w-[45%]">
        
           <Button click={showSwal}>Add</Button>
        </div>
</nav>

</>
  )
}

export default Navbar
