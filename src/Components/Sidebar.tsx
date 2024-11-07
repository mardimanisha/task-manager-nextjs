import React, { useState } from 'react'
import { FiMoon, FiPlusCircle, FiSun } from "react-icons/fi";

export const Sidebar = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
        <aside className='w-[18.75rem] flex flex-col justify-between bg-slate-950 h-full py-6 pl-4 text-white'>
          <div>
          <p className='text-medium-grey text-[.95rem] font-semibold uppercase pb-3'>All Boards (0)</p>
            <div className='cursor-pointer flex items-center space-x-2 my-2 mr-4 p-3 hover:bg-slate-800 hover:rounded-lg transition-all duration-200'> Current board name</div>
            <div className='cursor-pointer flex items-center space-x-2 my-2 mr-4 p-3 hover:bg-slate-800 hover:rounded-lg transition-all duration-200'>
                <FiPlusCircle />
                <p>Create New Board</p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center mr-4 p-1 bg-slate-800 rounded-lg">
            <button onClick={toggleTheme} className={`flex items-center space-x-1 px-9 py-1 bg-slate-950 text-white rounded-lg transition-colors duration-300 ${
                        theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-800 '
                    }`}>
              <FiMoon className="text-white" />
              <span>Dark</span>
            </button>

            <button onClick={toggleTheme} className={`flex items-center space-x-1 px-9 py-1 text-white rounded-lg transition-colors duration-300 ${
                        theme === 'light' ? 'bg-slate-700 text-white' : 'bg-slate-800 text-gray-400'
                    }`}>
              <FiSun className={theme === 'light' ? 'text-white' : 'text-gray-400'} />
              <span>Light</span>
            </button>
          </div>
        </aside>
  )
}
 