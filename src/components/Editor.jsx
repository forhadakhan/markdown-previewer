import React, { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';

const Editor = ({ onChange, value }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`h-full bg-white flex flex-col ${isFullScreen ? 'fixed top-0 left-0 right-0 bottom-0 z-50' : ''}`}>
      <div className="flex items-center justify-between mb-2  mx-5 ">
        <button className="text-xl cursor-none font-bold py-2 px-4 rounded-lg disable bg-indigo-500 text-white">Editor</button>
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={handleToggleFullScreen}
        >
          {isFullScreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
      <div className="flex-grow">
        <textarea
          id="editor"
          className="w-full h-full p-2 border border-gray-300 rounded-xl block"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Editor;
