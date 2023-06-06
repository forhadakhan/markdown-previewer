import React, { useState } from 'react';
import ReactShowdown from 'react-showdown';
import { FaExpand, FaCompress, FaPrint } from 'react-icons/fa';
import '../preview.css';

const Previewer = ({ markdown }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handlePrint = () => {
    const printContent = document.getElementById('preview').outerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const convertMarkdown = (markdown) => {
    const renderer = new ReactShowdown({
      flavor: 'github',
      emoji: true,
    });

    return renderer.render(markdown);
  };

  return (
    <div className={`bg-gray-200 h-full flex flex-col ${isFullScreen ? 'fixed p-8 top-0 left-0 right-0 bottom-0 z-50' : ''}`}>
      <div className="bg-gray-200 flex items-center justify-between mb-2 mx-5 px-4" id='preview-header'>
        <button className="text-xl font-bold py-2 px-4 rounded-lg bg-indigo-500 text-white" onClick={handleToggleFullScreen}>Preview</button>
        <div>
          <button
            className="p-2 rounded bg-white hover:bg-gray-300 mr-2"
            onClick={handleToggleFullScreen}
          >
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            className="p-2 rounded bg-white hover:bg-gray-300"
            onClick={handlePrint}
          >
            <FaPrint />
          </button>
        </div>
      </div>
      <div id="preview-content" className="border rounded-2xl overflow-auto w-full h-full bg-white p-6 scrollbar">
        <ReactShowdown
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
