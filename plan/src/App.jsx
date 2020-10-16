import React  from 'react';
 import apd from './app.module.css'
import { Layout } from 'antd';
import Sid from'./silder/index.jsx';
import RouterIndex from "./router/index.jsx";

const { Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout className={apd.lay}>
      <Sider className={apd.sid}><Sid/></Sider>
      <Layout>
        <Content><RouterIndex/></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
