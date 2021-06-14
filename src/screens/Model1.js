import React from 'react'
import './style.css'
import { IoMdArrowDropright} from 'react-icons/io';

export default function Model1() {
    return (
        <div className="Total">
            <div className="inside">
        <div className="textGrid">
           <span>Undo</span> 
           <span>Ctrl + Z</span> 
        </div>
        <div className="textGrid">
           <span>Redo</span> 
           <span>Shift + Ctrl + Z</span> 
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>Cut</span>
           <span>Ctrl + X</span>
        </div>
        <div className="textGrid">
           <span>Copy</span> 
           <span>Ctrl + C</span> 
        </div>
        <div className="textGrid">
           <span>Paste</span> 
           <span>Ctrl + V</span> 
        </div>
        <div className="textGrid">
           <span>Clear</span> 
           <span>Delete</span> 
        </div>
        <div className="textGrid">
            <span>Select All</span> 
           <span>Ctrl + A</span> 
        </div>
        <div className="textGrid">
            <span>Deselect All</span>
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
            <span>Fill...</span> 
           <span>Shift + F5</span> 
        </div>
        <div className="textGrid">
            <span>Stroke...</span>
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>Fade...</span> 
           <span>Shift + Ctrl + F</span> 
        </div>
        </div>
        </div>
    )
}
