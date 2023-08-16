import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Music, Type, Video,Rotate3d ,Layers,Shapes,Info} from "lucide-react"
import {IconPhoto} from '@tabler/icons-react'
import { BrowserRouter as Router, Switch, Routes,Route, Link } from "react-router-dom";
import TabContents from './TabContents';



const PictureList = [
  { id: 1, component: Music, url:"https://lucide.dev/icons/music"},
  { id: 3, component: Type , url:" https://lucide.dev/icons/type"},
  { id: 4, component: Rotate3d, url:"https://lucide.dev/icons/Rotate3d" },
  { id: 5, component: Layers, url:"https://lucide.dev/icons/Layers" },
  { id: 6, component: Shapes , url:"https://lucide.dev/icons/Shapes"},
  { id: 7, component: Info , url:"https://lucide.dev/icons/Info"},
];



export default function Sidebar({ }) {
   
  
  const [tabs, setTabs] = useState([
    {
      id: 1,
      draggedImages: [],
    },
  ]);

  const [activeTabId, setActiveTabId] = useState(1);

  const handleDragInTab = (tabId) => {
    setActiveTabId(tabId);
  };

const handleDrag = (e, data, picture) => {
  const draggedImage = {
    id: picture.id,
    url: picture.url,
    position: { x: data.x, y: data.y },
  };


  setTabs((prevTabs) => {
    return prevTabs.map((tab) => {
      if (tab.id === activeTabId) {
        const index = tab.draggedImages.findIndex((img) => img.id === picture.id);
        if (index !== -1) {
          return {
            ...tab,
            draggedImages: [
              ...tab.draggedImages.slice(0, index),
              draggedImage,
              ...tab.draggedImages.slice(index + 1),
            ],
          };
        } else {
          return {
            ...tab,
            draggedImages: [...tab.draggedImages, draggedImage],
          };
        }
      } else {
        return tab;
      }
    });
  } )
};

const handleAddTab = () => {
  const newTabId = tabs.length + 1;
  setTabs((prevTabs) => [
    ...prevTabs,
    {
      id: newTabId,
      draggedImages: [],
    },
  ]);
};

const handleRemoveTab = (tabId) => {
  if (tabs.length > 1) {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
  }
};

  return (
    <Router>
    <aside className='h-screen w-16'>
        <nav className='h-full flex-col bg-white border-r shadow-sm'>
     
       
        <div className="border-t flex-col p-3">
       <div className='text-xs p-1'>Help </div>
       <div className='p-1'> <Info/> </div>
          </div>

          {PictureList.map((picture) => (
                <div  className="border-t flex-col p-3" key={picture.id}>
                  <Draggable
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={{ x: 0, y: 0 }}
                    onStop={(e, data) => handleDrag(e, data, picture)}
                    bounds="parent"
                  >
                    <div className="border-t flex p-0 handle">
                        {React.createElement(picture.component, { size: 20 })}
                    </div>
                  </Draggable>
                </div>
              ))}
          
       
        </nav>

    </aside>

    <Routes>
            {tabs.map((tab) => (
              <Route 
                  key={tab.id} 
                  path={`/tab/${tab.id}`} 
                  element={
                        <TabContents draggedImages={tab.draggedImages} 
                            handleDrag={(e, data, picture) => handleDrag(e, data, picture)}/>
                  } 
              />
            ))}
          </Routes>
    </Router>
  )
}
