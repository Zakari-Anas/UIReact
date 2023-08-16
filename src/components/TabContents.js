import React from "react";
import Frame from "./Frame";

const TabContents = ({ draggedImages, handleDrag }) => {
  return (
    <div>
      <Frame draggedImages={draggedImages} handleDrag={handleDrag} />
      <h2>scene</h2>
    </div>
  );
};

export default TabContents;