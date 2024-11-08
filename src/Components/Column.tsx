
import React, { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi';
import { TaskForm } from './TaskForm';

export const Column: React.FC<{ title: string }> = ({title}) => {

  const [viewTask, setViewTask] = useState(false);

  const handleClick = () =>{
    setViewTask(true);
  }

  const closeForm = () => {
    setViewTask(false);
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <div className="w-64 bg-pastel.ghost p-3 flex flex-row justify-center mb3 ">
        <h2 className="text-lg text-black font-bold my-4">{title}</h2> 
      </div>
     
      {title === 'Backlog' && (
        <>
          <div onClick={handleClick} className='cursor-pointer flex items-center space-x-2 bg-sky-500 py-1 px-5 mt-5 mx-1 rounded-3xl shadow text-white hover:bg-sky-600 transition-all duration-200'>
            <FiPlusCircle />
            <p>Create New Board</p>
          </div>
          {viewTask && (
              <>
                <TaskForm onClose={closeForm}/>
              </>
            )}
        </>
      )}
    
    </div>
  )
}
