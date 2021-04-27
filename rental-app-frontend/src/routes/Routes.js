import React, {useState} from 'react';
import Admin from '../views/page/Admin';
import Main from '../views/page/Main';
import NavBar from '../components/NavBar';
import Signup from '../views/Signup/signup';
import Login from '../views/Login/login';
import { makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { Router, Route, Redirect, Switch } from "react-router";

const history = createBrowserHistory();
const useStyles = makeStyles(theme => ({
    displayText: {
        display: 'flex', 
        flexDirection: "column",
        alignItems: 'center',
    },
}));

// function linkRouter(){
//     return (
//         // adding all the paths in our application
//         <Switch>
//             <Route exact path="/"/>
//             <Route exact path="/signup" components={Signup}/>
//             <Route exact path="/login" components={Login}/>
//             <Route path="*">
//                 <Redirect to="/"/>
//             </Route>
//         </Switch>
//     );
// }


export default function Routes() {
    return (
        <div>
            <Router history={history}>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Signup}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
/*
function xsRoutes() {

    const classes = useStyles();
    const [role, setRole] = useState('');


    function handleChange(e){
        const {id, value} = e.target;
        setRole({[id] : value});
        console.log(role);           
    }

    return (
        <div style={{textAlign:'center'}}>
            <div>
                <label for='admin'>Admin</label>
                <input 
                type='radio'
                id='admin'
                name ='admin'
                value='admin'
                onChange={handleChange}
                checked={role.admin === 'admin'}
                />
                <label for='main'>Main</label>
                <input 
                type='radio'
                id='main'
                name ='main'
                value='main'
                onChange={handleChange}
                checked={role.main === 'main'}
                />
            </div>
            <div className={classes.displayText}>
                {role.main === 'main' ? (
                    <Main/>
                ): role.admin === 'admin' ?(
                    <Admin/>
                ):<h3>choose an option</h3>
                }
            </div>
        </div>
    )
}
*/
