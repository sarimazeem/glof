mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyaW0yNDAiLCJhIjoiY2xxbnZhbGNtMWNtZzJrcDl2amk5bndjbiJ9.K-VQe8qVvIij9URoQR0WaA';
// Assigning constants to sources of the layers
const districtBoundarySource = {
    type: 'geojson',
    data: 'http://172.18.1.4:8080/geoserver/abdul_sattar/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=abdul_sattar%3AProvincial_Boundary&outputFormat=application%2Fjson'
};
//_______________________________________________________________________________________________________________________
const map1 = new mapboxgl.Map({
    container: 'map',
    zoom: 7,
    center: [72.98695108531231, 35.323007094843575],
    pitch: 60,
    bearing: 0,
    // style: 'mapbox://styles/mapbox/satellite-streets-v12',
});

map1.addControl(new mapboxgl.NavigationControl());
map1.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    })
);
//________________________________________________________________________________________________________________________________________________________________________________________
map1.on('click', function (e) {
    console.log('Clicked coordinates:', e.lngLat);
});
