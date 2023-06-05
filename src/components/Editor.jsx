import React, { useState, useEffect } from 'react';
import { FaExpand, FaCompress, FaTrash } from 'react-icons/fa';
import InitialMarkdown from "./InitialMarkdown"; 

const Editor = ({ onChange, value }) => {
  const [isFullScreen, setIsFullScreen] = useState(false); 

  useEffect(() => {
    const initialValue = InitialMarkdown;
    onChange({ target: { value: initialValue } });

    // Cleanup function (optional)
    return () => {
      console.log('Cleanup function');
      // Code to run when the component is unmounted or reloaded
    };
  }, []); // Empty dependency array

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleClear = () => {
    const clearedValue = "";
    onChange({ target: { value: clearedValue } });
  };
  

  return (
    <div className={`bg-gray-200 h-full flex flex-col ${isFullScreen ? 'fixed p-8 top-0 left-0 right-0 bottom-0 z-50' : ''}`}>
      <div className="bg-gray-200 flex items-center justify-between mb-2 mx-5" id='editor-header'>
        <button className="text-xl cursor-none font-bold py-2 px-4 rounded-lg disable bg-indigo-500 text-white">Editor</button>
        <div>
          <button
            className="p-2 rounded bg-white hover:bg-gray-300 mr-2"
            onClick={handleToggleFullScreen}
          >
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            className="p-2 rounded bg-white hover:bg-red-300"
            onClick={handleClear}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="flex-grow">
        <textarea
          id="editor"
          className="w-full h-full p-8 border rounded-xl block scrollbar"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Editor;
