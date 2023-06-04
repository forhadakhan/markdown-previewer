import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

const BodyComponent = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-full m-2">
        <Editor />
      </div>
      <div className="md:w-full md:ml-4 m-2">
        <Previewer />
      </div>
    </div>
  );
};

export default BodyComponent;
