import React from 'react';
import svgimg from './svgimg.svg'
import '../App.css'

const Navbar=({headerText,headerExpanded})=>{
    return(
        <div className="header">
            <img src={svgimg} className={`img-exp ${headerExpanded?`img-exp`:`img-shrink`}`} alt="" />
            <h1 style={{color:'#363100'}}>{headerText}</h1>
        </div>
    )
}


export default Navbar