import React from 'react';
import GoogleMapReact from 'google-map-react';

// integration of google map in our application

const SimpleMap = () => {
    // Define the location for the map(monastir_tunisia)
    const defaultProps = {
        center: {
          lat:35.764252,
          lng:10.811289
        },
        zoom: 11
      };
  return (
        <div style={{ height: '550px', width: '500px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}     
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
