import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
//import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import dotenv from 'dotenv';
import axios from 'axios';

import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyB9vQOdH8h64XBi-s1kCAVhZ1kgNpnlWUs");

dotenv.config();
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        ///ggg();
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

    handleChange = (address) => {
        this.setState({ address });
    };

    componentDidMount() {
        Geocode.fromAddress("1223 king street M1H2S7").then(
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
                {/* <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion) => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete> */}

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
