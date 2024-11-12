import Image from 'next/image';
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx'

interface TaskFormProps {
    onClose: (event: React.MouseEvent<HTMLElement | SVGElement>) => void;
    onSubmit: (data: { coverPhoto: string; task: string; status: string; tags: string }) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onClose, onSubmit }) => {
    const [coverPhoto, setCoverPhoto] = useState('https://plus.unsplash.com/premium_photo-1729275301530-d76a5a603b41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    const [task, setTask] = useState('')
    const [status, setStatus] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        onSubmit({coverPhoto, task, status, tags})
    }

    const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setCoverPhoto(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 w-112'>
        <div className='bg-white-webSafe text-black p-6 rounded-lg shadow-lg'>
            <div className='flex flex-row items-baseline justify-between'>
                <div className='flex flex-row mb-4 items-center'>
                  <h2 className='text-xl font-semibold'>Task Details</h2>
                  <MdEdit className='ml-2'/>
                </div>
                
                <RxCross2 onClick={onClose} className='cursor-pointer text-gray-500 hover:text-gray-400 hover:scale-y-125 hover:scale-x-125 transition-color duration-300'/> 
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <Image 
                      src={coverPhoto} 
                      alt="Cover Photo" 
                      width={96}
                      height={24}
                      className='w-96 h-24 object-cover rounded-lg' 
                      onChange={handleCoverPhotoChange} />
                    <input type="file" className="mt-2" />
                </div>

                <div className='my-4'>
                    <label className='block text-black mb-2'>Your Task</label>
                    <input 
                      type="text" 
                      placeholder="Enter your task" 
                      className='w-full p-2 bg-white-ghost rounded-md border border-gray-300 shadow-lg hover:border-gray-400 transition-colors duration-300 focus:outline-none'
                      value={task}
                      onChange={(e) => setTask(e.target.value)}/>
                </div>

                <div className='mb-4'>
                    <label className='block text-black mb-2'>Status</label>
                    <select 
                      name="status" 
                      className='w-full p-2 text-gray-400 bg-white-ghost rounded-md border border-gray-300 shadow-lg hover:border-gray-400 transition-colors duration-300 focus:outline-none'
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}>
                        <option value="Backlog">Backlog</option>
                        <option value="In Progress">In Progress</option>
                        <option value="In Review">In Review</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <label htmlFor="" className='block text-black mb-2'>Tags</label>
                    <input 
                      type="text" 
                      placeholder='Add tags' 
                      className='w-full p-2 bg-white-ghost rounded-md border border-gray-300 shadow-lg hover:border-gray-400 transition-colors duration-300 focus:outline-none' 
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}/>
                </div>

                <div className='space-x-4 mt-6'>
                    <button className='w-24 px-4 py-2 bg-sky-500 rounded-full hover:bg-sky-600 transition-colors duration-300'>Save</button>
                    <button onClick={onClose} className='w-24 px-4 py-2 bg-sky-500 rounded-full hover:bg-sky-600 transition-colors duration-300'>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}
