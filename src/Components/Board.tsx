import React, { useState } from 'react'
import { Column } from './Column'

const initialColumns = [
    { id: 'backlog', title: 'Backlog' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'in-review', title: 'In Review' },
    { id: 'completed', title: 'Completed' },
  ];

export const Board = () => {
    const [columns] = useState(initialColumns);
  return (
    <div className="flex justify-between p-5">
      {columns.map((column) => (
        <Column key={column.id} title={column.title} />
      ))}
    </div>
  )
}