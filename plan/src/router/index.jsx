import React,{Component} from "react";
import {Switch,Route,Redirect}from "react-router-dom";
import Home from "../content/index.jsx";
import Daily from "../daily/index.jsx";
import Setdata from "../setdata/index.jsx";

class RouterIndex extends Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/home" />)} />
				<Route path="/home" component={Home}/>
				<Route path="/daily" component={Daily}/>
				<Route path="/setdata" component={Setdata}/>
            </Switch>
        );
    }
}
export default RouterIndex;