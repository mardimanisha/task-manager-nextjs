import React from 'react'

export const Tasks = () => {
  return (
    <div className="w-60 mb-4 p-4 bg-pastel-pink rounded-lg shadow-lg border border-gray-200">
      <p className="text-gray-700 mb-4">
      task
      </p>
    <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">Tag 1</span>
        <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">Tag 2</span>
        <span className="px-3 py-1 text-sm font-medium text-white bg-purple-500 rounded-full">Tag 3</span>
    </div>
</div>

  )
}

  