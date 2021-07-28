import React from 'react';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

export default function MapSearch() {
    return (
        <div className="container">
            <div className="mt-5">
                <h2>Map Integration</h2>
            </div>
            <GoogleMap />
        </div>
    );
}
