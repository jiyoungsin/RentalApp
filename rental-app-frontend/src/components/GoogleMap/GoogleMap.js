import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import dotenv from 'dotenv';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyB9vQOdH8h64XBi-s1kCAVhZ1kgNpnlWUs"); // need to put it in env.
dotenv.config();
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mapCenter: {
                lat: '',
                lng: '',
            },
        };
    }

    componentDidMount() {
        Geocode.fromAddress(this.props.address).then(
          (response) => {
            const  formattedFullAddress = response.results[0].formatted_address;
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({address: formattedFullAddress, mapCenter: {lat, lng}});
          },
          (error) => {
            console.error(error);
          }
        )
      }

    render() {
        return (
            <div style={({ height: '325px'})}>
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    style={{width: "1040px", height: "300px"}}
                >
                    <Marker
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng,
                        }}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB9vQOdH8h64XBi-s1kCAVhZ1kgNpnlWUs',
})(MapContainer);
