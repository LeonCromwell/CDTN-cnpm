import React from 'react';
import PreContent from './PreContent/PreContent';
import RunButton from './RunButton/RunButton';
import ResultHtml from './ResultHTML/ResultHTML';
import ResultContent from './ResultContent/ResultContent';
import Sidebar from './Sidebar/Sidebar';
import './Contents.scss'

const Contents = () => {
    return (    
    <div className='main-container'>        
        <Sidebar className="sidebar" />
        <div className='content'>
            <PreContent className="preContent" />
            <RunButton className="runButton" />
            <ResultContent className="resultContent" />
            <ResultHtml className="resultHtml" />
        </div>
    </div>
    );
}

export default Contents;
