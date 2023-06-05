import React from 'react';
import BodyComponent from './BodyComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMarkdown);

const MainComponent = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div id="header" className="flex items-center justify-center">
                <FontAwesomeIcon icon={faMarkdown} className="text-4xl mr-2" />
                <h1 className="text-2xl font-bold">Markdown Previewer</h1>
            </div>
            <div id="body" className="flex-grow ">
                <BodyComponent />
            </div>
            <div id="footer" className="pt-4 bg-gray-200">
                <div className='bg-white border rounded-t-3xl text-center text-gray-500'>
                    <p className=''>A simple markdown previewer.</p>
                    <p className=''>Code by &nbsp;
                        <a href='https://github.com/forhadakhan/'>@forhadakhan</a>  &nbsp;
                        [<a  href='https://github.com/forhadakhan/markdown-previewer'>repo</a>] 
                    </p>
                    <p><a href='https://www.markdownguide.org/cheat-sheet#overview'>Markdown Cheatsheet</a></p>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
