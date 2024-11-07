import React, { useState } from 'react'
import { Column } from './Column'
import { FiPlusCircle } from 'react-icons/fi';
import { TaskForm } from './TaskForm';


const initialColumns = [
    { id: 'backlog', title: 'Backlog' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'in-review', title: 'In Review' },
    { id: 'completed', title: 'Completed' },
  ];

export const Board = () => {
  const [columns] = useState(initialColumns);
  const [viewTask, setViewTask] = useState(false);

  const handleClick = () =>{
    setViewTask(true);
  }

  const closeForm = () => {
    setViewTask(false);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {columns.map((column) => (
        <div key={column.id}>
          <Column title={column.title}/>
          {column.id === 'backlog' ? (
            <>
            <div onClick={handleClick} className='cursor-pointer flex items-center space-x-2 bg-slate-950 p-2 m-2 rounded shadow text-white hover:bg-slate-800 hover:rounded-lg transition-all duration-200'>
              <FiPlusCircle />
              <p>Create New Board</p>
            </div>
            {viewTask && (
              <>
                <TaskForm onClose={closeForm}/>
              </>
            )}
            </>
          ) : (<p></p>)} 
        </div>
      ))}
    </div>
  )
}
