import React from 'react'
import './style.css'
import { IoMdArrowDropright} from 'react-icons/io';

export default function Model2() {
    return (
        <div className="Total">
            <div className="inside">
        <div className="textGrid">
           <span>Zoom In</span> 
           <span>Ctrl + +</span> 
        </div>
        <div className="textGrid">
           <span>Zoom Out</span> 
           <span>Ctrl + -</span> 
        </div>
        <div className="textGrid">
           <span>Fit The Area</span>
        <span>Ctrl + O</span> 
          
        </div>
        <div className="textGrid">
           <span>Pixel to Pixel</span>
        <span>Ctrl + P</span> 
          
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>Screen Mode</span> 

           <span>
            <IoMdArrowDropright size="25px"/>
           </span>
          
        </div>
        <div className="textGrid">
            <span>Show</span>
            <span>
            <IoMdArrowDropright size="25px"/>
           </span>
        </div >
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
           <span>Rulers</span> 
           <span>Ctrl + R</span> 
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
            <span>Layers</span> 
          
        </div>
        <div className="textGrid">
            <span>Libraries</span>
        </div>
        
        <div className="textGrid">
            <span>Transform</span>
            
        </div>
        <div style={{backgroundColor:'#A0A0A0',width:"124%",height:"1px",position:"relative",left:"-25px",margin:"5px"}}></div>
        <div className="textGrid">
            <span>Guides</span>
            <span>
            <IoMdArrowDropright size="25px"/>
           </span>
        </div>
       
        <div className="textGrid">
            <span>Grid</span>
            <span>
            <IoMdArrowDropright size="25px"/>
            </span>
        </div>
        </div>
        </div>

    )
}
