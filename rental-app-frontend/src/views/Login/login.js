import React, {useState, useEffect}  from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';

export default function Login() {
    const UseStyles = makeStyles(theme => ({
        formStyle: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems : 'center',
            justifySelf : 'center',
        },
        container: {
            width: '60%',
            height: '100vh',
            margin: 'auto',
        }
    }));
    const classes = UseStyles();
    const [state, setState] = useState({
        name: '',
    });

    const onSubmit = () =>{
        // do something.
    }
    const handleChange = (e) => {
        // console.log(e);
        const {id, value} = e.target;
        setState({[id]: value});
    }

    return (
        <div className={classes.container}>
            {/* <h3>{state.name}</h3> */}
            <form className={classes.formStyle} onSubmit={onSubmit()}>
                <label for="id">Id</label>
                <InputForm onChange={handleChange} type="text" value={state.name} placeholder="JohnDoe@gmail.com" id="name" name="name"/>
                <label for="password">Password</label>
                <InputForm onChange={handleChange} type="text" value={state.name} placeholder="" id="password" name="password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
