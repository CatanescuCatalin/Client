import React from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

const Map = ({
  location,
  carList
}) => (
  <div>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: location.latitude, lng: location.longitude }}
    >
      {carList.map(car => {
        return (
          <Marker key={car._id} label={car.Model} title={car.Model + " " + car._id} position={{ lat: parseFloat(car.Ncoordonate), lng: parseFloat(car.Ecoordonate) }}/>
        )
      })}
    </GoogleMap>
  </div>
);

export default withGoogleMap(Map);