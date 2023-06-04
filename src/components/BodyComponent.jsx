import React, { useState } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

const BodyComponent = () => {
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white border rounded-2xl mb-4 h-screen">
      <div className="md:w-full m-2 border-left">
        <Editor onChange={handleEditorChange} value={markdown} />
      </div>
      <div className="md:w-full md:ml-4 m-2">
        <Previewer markdown={markdown} />
      </div>
    </div>
  );
};

export default BodyComponent;
