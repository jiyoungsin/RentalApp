import React from 'react';
import BigGoogleMap from '../../components/BigGoogleMap/BigGoogleMap';

export default function MapSearch() {
    return (
        <div className="container">
            <div className="mt-5">
                <h2>Map Integration</h2>
            </div>
            <BigGoogleMap address={'100 Yonge St M5C2W1'} />
        </div>
    );
}
