import React, { useState} from 'react';
import asc from "./index.module.css";
import times from ".././comment/sqltime.js";
import axios from 'axios';
import { DatePicker, Input,Button } from 'antd';
// 以下2行是让日期选择变为中文
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
function Example(props){
    const [ count , setCount ] = useState([6,8,10,12,14,16,18,20]);
    const [ time , setTime ] = useState("");
    const [ dayplan , setDayplan ] = useState("");
    const [ conet , setConet ] = useState({});
    function onChange(date, dateString) {
        if (dateString !==""){
            let t =times(dateString)
            setTime(t);
        } 
    }
    function inputChange(e) {
        setDayplan(e.target.value)
    
    }
    function onOperate(e,key) {
         let js =JSON.parse(JSON.stringify(conet))
         js["q"+key]=e.target.value
         setConet(js);
    }
    function onClick() {
         axios.post('/api/setdayle', {"time": time,"dayplan":dayplan,"conet":conet})
          .then((res)=>{console.log(res)})
          .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    return (
        <div className={asc.whole}>
            <div className={asc.head}> 
                <div className={asc.pick}>请选择日期：<DatePicker onChange={onChange} locale={locale} size="large"/></div>
                <div className={asc.rjh}>
                    <p>设置日计划：</p>
                    <Input placeholder="设置日计划" value={dayplan} onChange={inputChange}/>
                </div>
            </div>
            <div className={asc.content}>
            	{
	            	count.map((key) => {
                        return <div key={key}>
                        	<div>{key}点 —— {key+2}点</div>
                        	<div>
                                <Input placeholder="设置日计划" value={conet[key]} onChange={(e) => onOperate(e,key)}/>
                            </div>
                        </div>
                    })
                     
            	}
            </div>
            <Button type="primary" onClick={onClick}>提交</Button>
        </div>
    )
}
export default Example;