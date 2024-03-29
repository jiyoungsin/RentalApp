import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default function Maintenance() {
    const [maintenance, setMaintenance] = useState([]);
    const EditLink = '/edit/';
    useEffect(() => {
        axios
            .get(`http://www.aidatastructures.com:5000/maintenance/maintenance`)
            .then((res) => {
                setMaintenance(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Maintenance Requests');
            });
    }, []);

    const buttonPushed = (id) => {
        axios
            .delete(`http://www.aidatastructures.com:5000/maintenance/delete/${id}`)
            .then((res) => {
                console.log('Deleting Maintenance from Database');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Deleting Maintenance');
            });
    };

    return (
        <div className="container mt-5">
            <ul class="list-group">
                {maintenance.map((main) => (
                    <li class="list-group-item">
                        <Link to="/">{main.maintenanceIssue}</Link>
                        <Button></Button>
                        <Button onClick={() => buttonPushed(main._id)} style={{ color: '#000' }}>
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
