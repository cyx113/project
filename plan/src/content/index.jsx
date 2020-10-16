import React, { useState,useEffect } from 'react';
import asc from "./index.module.css";
// 格式化时间的函数
import times from ".././comment/time.js";
//获取月份有多少天将天数组合成数组。
import getMonthDay from ".././comment/getMonthDay.js";
import { DatePicker} from 'antd';
// 以下2行是让日期选择变为中文
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import axios from 'axios'
import {Link } from "react-router-dom";




function Container(){
	const [ count , setCount ] = useState([1,2]);
	const [ time , setTime ] = useState("2020-10-15");
	const [ conet , setConet ] = useState({1:"学习js"});
	// 发起请求函数
	function getSrt(init){
		axios.post('/api/students', {"time": init})
          .then((res)=>{setConet(res.data[0]) })
          .catch((error)=>{console.log('axios 获取数据失败'+error)})
	}
	useEffect(()=>{
        let t=times(new Date(),"yyyy-MM");
        setTime(t);
        let cou=getMonthDay(t);
        setCount(cou);
        getSrt(t);
    },[]);
    function onChange(date, dateString) {
        if (dateString !==""){
            setTime(dateString);
            setCount(getMonthDay(dateString));
            getSrt(dateString);
        } 
	}
    return (
        <div className={asc.content}>
        	{/*头部日期*/}
            <div className={asc.head}>
            	{/*显示当前日期*/}
            	<div>{time}</div>
            	<div>
    				<DatePicker onChange={onChange} picker="month" locale={locale} />
    			</div>
            </div>
            <div className={asc.main}>
            	{
	            	count.map((key) => {
                        return <div key={key}>
                             <Link to={`/daily?a=${time}-${key}`}>
                                <div>{key}</div>
                                <div>{conet['q'+key]}</div>
                             </Link>
                        	
                        </div>
                    })
            	}
            	<div></div>
            </div>
        </div>
    )
}
export default Container;