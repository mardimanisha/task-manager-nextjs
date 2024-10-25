
import React from 'react'
import { Tasks } from './Tasks'

export const Column = ({title}) => {
  return (
    <div className="w-1/5 bg-zinc-700 p-3 rounded-md">
      <h2 className="text-lg text-white font-bold mb-3">{title}</h2>
      <div className="min-h-[150px]">
        <Tasks />
      </div>
    </div>
  )
}
