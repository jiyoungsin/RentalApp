import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Maintenance() {
    const [maintenance, setMaintenance] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/maintenance/maintenance`)
            .then((res) => {
                setMaintenance(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Maintenance Requests');
            });
    }, []);

    return (
        <div className="container mt-5">
            <ul class="list-group">
                {maintenance.map((main) => (
                    <li class="list-group-item">
                        <Link to="/">{main.maintenanceIssue}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
