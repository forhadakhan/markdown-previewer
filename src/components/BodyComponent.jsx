import React, { useState } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

const BodyComponent = () => {
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="bg-gray-200 flex flex-col md:flex-row border rounded-t-3xl md:p-4 h-screen ">
      <div className="md:w-full m-2">
        <Editor onChange={handleEditorChange} value={markdown} />
      </div>
      <div className="md:w-full m-2 overflow-auto">
        <Previewer markdown={markdown} />
      </div>
    </div>
  );
};

export default BodyComponent;
