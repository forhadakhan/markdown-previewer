import React from 'react';
import BodyComponent from './BodyComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMarkdown);

const MainComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray p-4 ">
      <div id="header" className="flex items-center justify-center p-2">
        <FontAwesomeIcon icon={faMarkdown} className="text-4xl mr-2" />
        <h1 className="text-2xl font-bold">Markdown Previewer</h1>
      </div>
      <div id="body" className="flex-grow ">
        <BodyComponent />
      </div>
      <div id="footer" className="text-center text-gray-500">
        <p className='p-0 m-0'>A simple markdown previewer.</p>
        <p className='p-0 m-0'>Code by <a href='#'>@forhadakhan</a></p>
      </div>
    </div>
  );
};

export default MainComponent;
