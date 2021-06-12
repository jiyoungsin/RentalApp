import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

export default function FindProperty() {
    const useStyles = makeStyles(theme => ({
        container:{
            width: '80%',
            height: '80%',
            margin: 'auto',
            display: "flex",
            marginTop: "5vh",

        },
    }));
    const [state,setState] = useState('');
    const handleChange = (e) => {
        const {id,value} = e.target;
        setState((ps)=>({
            ...ps,
            [id]: value,
        }));
    }

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className="input-group">
                <input onChange={handleChange} type="text" className="form-control" value="search" id="search" name="search" placeholder="Search by Rental Name, or Country"/>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </div>
            </div>
        </div>
    )
}
