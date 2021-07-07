import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div class="vertical-center mt-5 mb-5 p-5">
            <div class="container">
                <div id="notfound" class="text-center ">
                    <h1>😮</h1>
                    <h2>Oops! Page Not Be Found</h2>
                    <p>Sorry but the page you are looking for does not exist.</p>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
}
