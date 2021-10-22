import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoidGFraS1rYXVzZXIiLCJhIjoiY2t2MTg3dXZ5MGlleDJ3bXMxb3Axc3dnbiJ9.mV3ef2Meg9crWYlc4wnTPg';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [89.861591, 24.813477],
            zoom: 13
        }, []);

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    })
    return (
        <div>
            <h3>Map Direction</h3>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;