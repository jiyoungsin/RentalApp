import React, {useState} from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputForm from '../../components/InputForm';


export default function Maintenance() {
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
        },
        buttonPadding: {
            padding: "10px",
            marginTop: "20px",
            marginBottom: "20px",
        },
        labelText: {
            fontSize: '24px',
        },
    }));

    const classes = UseStyles();
    const [formData, setFormData] = useState({
        email: '',
        maintenanceIssue: '',
        tenantName: '',
        landlordName: '',
        tenantPhoneNumber: '',
        landlordPhoneNumber: '',
    });
    
    const [maintenanceRequestSuccessful] = useState(false);
    
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((ps)=>({
            ...ps,
            [id]: value,
        }));
    }
    
    const onSubmit = () =>{
        // TO DO
        console.log("Backend stuffs needed to be added");
        const payload = {...formData}
        console.log("payload")
        console.log(payload)
        axios.post('http://localhost:5000/maintenance/create', {
            data: payload,
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => {
            console.log("Creating new Maintenance");
            const the_User = res.data
            console.log(the_User)
            // set something here.
        }).catch(err => {
            console.error(err);
            alert('ERROR: Logging in');
        });
    }
    console.log(formData)

    return (
        // Shouln't be a <br> here but added it for now.
        <div className={classes.container}>
            <br />
            <form className={classes.formStyle}>
                <h2>Maintenance Report</h2>
                <label className={classes.labelText} for="tenantName">Tenant FullName</label>
                <InputForm onChange={handleChange} type="text" value={formData.tenantName} id="tenantName" name="tenantName"/>
                <label className={classes.labelText} for="landlordName">Landlord FullName</label>
                <InputForm onChange={handleChange} type="text" value={formData.landlordName} id="landlordName" name="landlordName"/>
                <label className={classes.labelText} for="email">Landlord's Email</label>
                <InputForm onChange={handleChange} type="text" value={formData.email} id="email" name="email"/>
                <label className={classes.labelText} for="tenantPhoneNumber">Tenant's Phone Number</label>
                <InputForm onChange={handleChange} type="text" value={formData.tenantPhoneNumber} id="tenantPhoneNumber" name="tenantPhoneNumber"/>
                <label className={classes.labelText} for="landlordPhoneNumber">Landlord's Phone Number</label>
                <InputForm onChange={handleChange} type="text" value={formData.landlordPhoneNumber} id="landlordPhoneNumber" name="landlordPhoneNumber"/>
                <label className={classes.labelText} for="maintenanceIssue">Maintenance Issue Details</label>
                <InputForm onChange={handleChange} type="text" value={formData.maintenanceIssue} id="maintenanceIssue" name="maintenanceIssue"/>
                {/* ADD FILE UPLOAD BOX HERE FOR PICTURES  */}
                <br/>
                <label className={classes.labelText} for="fileUpload">-----File Upload need to be added here------</label>

                <Button variant="primary" className={classes.buttonPadding} onClick={()=>{onSubmit()}}>Submit</Button>
            </form>
            {maintenanceRequestSuccessful ? <Redirect to="/"/> : null }
        </div>
        
    )
}
