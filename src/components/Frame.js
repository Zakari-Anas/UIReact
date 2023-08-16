import React from 'react'
import Draggable from "react-draggable"
import { Music, Type, Rotate3d, Layers, Shapes, Info } from 'lucide-react';

function Frame({ draggedImages, handleDrag, activeTabId }) {


  
  return (
    <div className="Board">
      {draggedImages.map((picture) => (
        <Draggable
          axis="both"
          key={picture.id}
          handle=".handle"
          defaultPosition={picture.position || { x: 0, y: 0 }}
          position={picture.position || { x: 0, y: 0 }}
          onStop={(e, data) => handleDrag(e, data, picture)}
          bounds="parent"
        >
          <img
            className="handle"
            id="dragged-img"
            src= {picture.url}
            alt={`Image ${picture.id} ` }
            
          />
          <h2>dsfdds</h2>
        </Draggable>
      ))}
    </div>
  );
}

export default Frame;