import React from "react";
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps";

const Map = (props)=>{
    return(
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 4.667712355028234, lng: -74.0535848}}
        />
    );
};
//4.667712355028234, -74.0535848
export default withScriptjs(
    withGoogleMap(
        Map
    )
)