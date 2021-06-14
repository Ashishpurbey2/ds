import React from 'react'
import './style.css'
import { IoMdArrowDropright} from 'react-icons/io';

export default function Model4() {
    return (
        <div className="Total">
            <div className="inside">
        <div className="textGrid">
           <span>New.....</span> 
           <span>Ctrl + N</span> 
        </div>
        <div className="textGrid">
           <span>Open...</span> 
           <span>Ctrl + 0</span> 
        </div>
        <div className="textGrid">
           <span>Open More...</span>
           <span>
            <IoMdArrowDropright size="25px"/>
           </span> 
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>Close...</span> 
           <span>Alt + F4</span> 
        </div>
        <div className="textGrid">
            <span>Rename...</span>
        </div >
        <div className="textGrid">
           <span>Save...</span> 
           <span>Ctrl + S</span> 
        </div>
        <div className="textGrid">
            <span>Save As...</span> 
           <span>Shift + Ctrl + S</span> 
        </div>
        <div className="textGrid">
            <span>Print...</span>
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
            <span>Export</span>
            <span>
            <IoMdArrowDropright size="25px"/>
           </span>
        </div>
        <div className="textGrid">
            <span>Export Layers</span>
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
            <span>File Info</span>
        </div>
        </div>
        </div>
    )
}
