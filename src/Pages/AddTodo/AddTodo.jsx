import React from 'react'
import Button from '../Button/Button'
import React , {useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import AddTodo from '../Todo/Todorows/AddTodo/AddTodo'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const AddTodo = () => {
        const [inputValue, setInputValue] = useState('');
        const dispatch = useDispatch();
      
        const showSwal = () => {
          MySwal.fire({
            title: <i>Add Todo</i>,
            input: 'text',
            inputValue,
            showCancelButton: true,
            confirmButtonText: 'Add',
            cancelButtonText: 'Cancel',
            preConfirm: (value) => {
              if (value.trim() === '') {
                MySwal.showValidationMessage('Todo cannot be empty');
                return false;
              }
              return value;
            },
          }).then((result) => {
            if (result.isConfirmed) {
              handleAddTodo(result.value); // Pass the input value to handleAddTodo
            }
          });
        };
      
        const handleAddTodo = (text) => {
          if (text.trim() === '') return; // Prevent adding empty todos
      
          // Create a new todo object
          const newTodo = {
            id: Date.now(), // Use a unique ID (e.g., timestamp)
            text: text,
            completed: false, // Default to not completed
          };
      
          // Dispatch the addTodo action with the new todo
          dispatch(addTodo(newTodo));
      
          // Clear the input field
          setInputValue('');
        };
  return (
    <div>
      
    </div>
  )
}

export default AddTodo
