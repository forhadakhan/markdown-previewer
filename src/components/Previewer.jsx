import React, { useState } from 'react';
import ReactShowdown from 'react-showdown';
import { FaExpand, FaCompress } from 'react-icons/fa';
import '../preview.css';

const Previewer = ({ markdown }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const convertMarkdown = (markdown) => {
    const renderer = new ReactShowdown({
      flavor: 'github',
      emoji: true,
    });

    return renderer.render(markdown);
  };

  return (
    <div className={`h-full bg-white flex flex-col ${isFullScreen ? 'fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden' : ''}`}>
      <div className="flex items-center justify-between mb-2 mx-5 px-4" id='preview-header'>
        <button className="text-xl cursor-none font-bold py-2 px-4 rounded-lg disable bg-indigo-500 text-white">Preview</button>
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={handleToggleFullScreen}
        >
          {isFullScreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
      <div className="preview-content p-4 overflow-auto">
        <ReactShowdown
          id="preview"
          className=""
          markdown={markdown}
          flavor="github"
          emoji
        />
      </div>
    </div>
  );
};

export default Previewer;
