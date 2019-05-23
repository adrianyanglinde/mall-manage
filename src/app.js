import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Layout from 'components/layout/index.js';
import Home   from 'pages/home/index.js';
import UserList  from 'pages/user-list/index.js';
import Login  from 'pages/login/index.js';
import errorPage from "./pages/error";

class App extends React.Component{
    render() {
        let LayoutRouter =
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Home}/>
                    <Route path="/order" component={Home}/>
                    <Route path="/user" component={UserList}/>
                    <Route component={errorPage}/>
                </Switch>
            </Layout>;

        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" render={() => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}


export default App;