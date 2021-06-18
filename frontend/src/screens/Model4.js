import React from 'react'
import './style.css'
import { IoMdArrowDropright} from 'react-icons/io';

export default function Model4() {
    return (
        <div className="Total">
            <div className="inside">
        <div className="textGrid">
           <span>Language</span> 
           <span>
            <IoMdArrowDropright size="25px"/>
           </span> 
           
        </div>
        <div className="textGrid">
           <span>Theme</span> 
           <span>
            <IoMdArrowDropright size="25px"/>
           </span> 
        </div>
        <div className="textGrid">
           <span>Keyboard Shortcuts</span>
           
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>DS Tutorial...</span> 
        </div>
        <div className="textGrid">
            <span>DS Help...</span>
        </div >
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>What's New...</span> 
           
        </div>
        <div className="textGrid">
            <span>Save As...</span> 
           <span>Shift + Ctrl + S</span> 
        </div>
        <div className="textGrid">
            <span>About DesignSheets</span>
        </div>
        
        </div>
        </div>
    )
}
