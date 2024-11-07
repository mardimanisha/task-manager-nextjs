
import React from 'react'

export const Column: React.FC<{ title: string }> = ({title}) => {
  return (
    <div className="w-64 bg-zinc-700 p-3 rounded-md">
      <h2 className="text-lg text-white font-bold mb-3">{title}</h2>
      
    </div>
  )
}
