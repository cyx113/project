import React, { useState,useEffect } from 'react';
import asc from "./index.module.css";
import axios from 'axios';
function Example(props){
    const [ count , setCount ] = useState([6,8,10,12,14,16,18,20]);
    const [ time , setTime ] = useState("2020-10-15");
    const [ conet , setConet ] = useState({6:"学习英语"});
    useEffect(()=>{
        let tr=props.location.search.substr(3);
        setTime(tr)
        axios.post('/api/rjh', {"time":tr})
          .then((res)=>{setConet(res.data[0])})
          .catch((error)=>{console.log('axios 获取数据失败'+error)})
    },[]);
    return (
        <div className={asc.whole}>
            <div className={asc.head}>{time}日程安排</div>
            <div className={asc.content}>
            	{
	            	count.map((key) => {
                        return <div key={key}>
                        	<div>{key}点 —— {key+2}点</div>
                        	<div>{conet['q'+key]==="undefined"?"":conet['q'+key]}</div>
                        </div>
                    })
                     
            	}
            </div>
        </div>
    )
}
export default Example;