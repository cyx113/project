import React from 'react';
import icon from ".././image/timg.jpg";
import asc from "./index.module.css"
import {Link } from "react-router-dom";
function Example(){
    return (
        <div className={asc.app}>
        	<Link to="/setdata">
        		<img src={icon} alt="" width="100" height="100" className={asc.images}/>
        	</Link>
            
            <div className={asc.all}>
             	<div>吃不了自律的苦</div>
             	<div>就要受平庸的罪</div>
            </div>
        </div>
    )
}
export default Example;