import React from 'react'
import { useContext, createContext, useState } from "react";

import { Music, Type, Video,Rotate3d ,Layers,Shapes,Info} from "lucide-react"
import {IconPhoto} from '@tabler/icons-react'

const SidebarContext = createContext()
export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)
  return (
    <aside className='h-screen w-16'>
        <nav className='h-full flex-col bg-white border-r shadow-sm'>
     
       
        <div className="border-t flex-col p-3">
       <div className='text-xs p-1'>Help </div>
       <div className='p-1'> <Info/> </div>
          </div>
        <div className="border-t flex p-3">
        <Rotate3d/>
          
         
          </div>
          <div className="border-t flex p-3">
          <Video/>
          </div>
        
          <div className="border-t flex p-3">
          <IconPhoto/>
          </div>
          <div className="border-t flex p-3">
         <Music/>
          </div>
          <div className="border-t flex p-3">
         <Type/>
          </div>
          <div className="border-t flex p-3">
         <Shapes/>
          </div>

          <div className="border-t flex p-3">
         <Layers/>
          </div>
        </nav>

    </aside>
  )
}



export function SidebarItem({ icon, text, active, alert }) {
   
    
    return (
      <li
        className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `}
      >
        {icon}
        <span
          className='overflow-hidden transition-all'
        >
          {text}
        </span>
        {alert && (
          <div
            className='absolute right-2 w-2 h-2 rounded bg-indigo-400 '
          />
        )}
  
     
      </li>
    )
  }
  