import React from "react";

const ImageDisplay = ({ base64String }) => {
  return (
    <div>
      <img src={`data:image/png;base64,${base64String}`} alt="Decoded Image" />
    </div>
  );
};

export default ImageDisplay;
