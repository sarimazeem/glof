const pkBoundSource = {
    type: 'geojson',
    data: 'http://172.18.1.4:8080/geoserver/abdul_sattar/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=abdul_sattar%3ANational_Boundary&outputFormat=application%2Fjson'
};
const badswatBoundSource = {
    type: 'geojson',
    data: 'http://172.18.1.4:8080/geoserver/abdul_sattar/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=abdul_sattar%3ADistrict_Boundary&outputFormat=application%2Fjson&CQL_FILTER=DISTRICT=%27GHIZER%27'
};
const badswatfaultlineSource = {
    type: 'geojson',
    data: badswat_faultine
};
const badswatGlacierSource = {
    type: 'geojson',
    data: badswat_glaciers
};
const badswat_lakeSource = {
    type: 'geojson',
    data: badswat_lake
};
const badswat_risk_zonationSource = {
    type: 'geojson',
    data: badswat_risk_zonation
};
const ishkomanRiverSource = {
    type: 'geojson',
    data: ishkoman_river
};
const karambarLakeSource = {
    type: 'geojson',
    data: karambar_lake
};

const hiranchiBoundSource = {
    type: 'geojson',
    data: 'http://172.18.1.4:8080/geoserver/abdul_sattar/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=abdul_sattar%3ADistrict_Boundary&outputFormat=application%2Fjson&CQL_FILTER=DISTRICT=%27GILGIT%27'
};
const hiranchiGlacierSource = {
    type: 'geojson',
    data: hiranchi_glaciers
};
const hiranchiLakeSource = {
    type: 'geojson',
    data: hiranchi_lake
};
const hiranchiRiskZonationSource = {
    type: 'geojson',
    data: hiranchi_risk_zonation
};
//____________________________________________________________________________________________________________________________________________________________________________________
map1.on('style.load', () => {
    map1.addSource('pkBound', pkBoundSource);
    map1.addSource('badswatBound', badswatBoundSource);
    map1.addSource('badswatfaultline', badswatfaultlineSource);
    map1.addSource('badswatGlacier', badswatGlacierSource);
    map1.addSource('badswatLake', badswat_lakeSource);
    map1.addSource('ishkomanRiver', ishkomanRiverSource);
    map1.addSource('karambarLake', karambarLakeSource);
    map1.addSource('badswatRiskZonation', badswat_risk_zonationSource);
    map1.addSource('hiranchiBounds', hiranchiBoundSource);
    map1.addSource('hiranchiGlaciers', hiranchiGlacierSource);
    map1.addSource('hiranchiLake', hiranchiLakeSource);
    map1.addSource('hiranchiRiskZonation', hiranchiRiskZonationSource);

    //_________________________________________________________________________________________________
    map1.addLayer({
        'id': 'pkBound',
        'type': 'line',
        'source': 'pkBound',
        'layout': {},
        'paint': {
            'line-color': 'black',
            'line-width': 4
        }
    });
    //__________________________________________________________________________________________________
    // Add the boundary line layer (initially hidden)
    map1.addLayer({
        id: 'badswat-line',
        type: 'line',
        source: 'badswatBound',
        layout: {
            'visibility': 'none' // Hidden by default
        },
        paint: {
            'line-color': '#088', // Change to any color
            'line-width': 6, // Adjust thickness
        }
    });
    map1.addLayer({
        id: 'hiranchi-line',
        type: 'line',
        source: 'hiranchiBounds',
        layout: {
            'visibility': 'none' // Hidden by default
        },
        paint: {
            'line-color': '#088', // Change to any color
            'line-width': 6, // Adjust thickness
        }
    });
    //__________________________________________________________________________________________________
    //Badswat Layers
    map1.addLayer({
        id: 'badswat-glacier-layer',
        type: 'fill',
        source: 'badswatGlacier',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'fill-color': '#ADD8E6', // Light blue
            'fill-opacity':0.6
        }
    });
    map1.addLayer({
        id: 'badswat-glacier-line',
        type: 'line',
        source: 'badswatGlacier',
        layout: {
            'visibility': 'none' // Hidden by default
        },
        paint: {
            'line-color': 'black', // Change to any color
            'line-width': 3, // Adjust thickness
        }
    });
    map1.addLayer({
        id: 'badswat-risk-layer',
        type: 'fill',
        source: 'badswatRiskZonation',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'fill-color': [
                'match',
                ['get', 'ZONATION'], // Attribute to match
                'Low', '#00990f',     // Green for low risk
                'Medium', '#f0e02e',  // Yellow for medium risk
                'High', '#7d0800',    // Red for high risk
                '#000000'             // Default color (black) if no match
            ],
            'fill-opacity': 0.7
        }
    });    
    map1.addLayer({
        id: 'badswat-faultine-layer',
        type: 'line',
        source: 'badswatfaultline',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'line-color': 'black',
            'line-width': 3,
        }
    });
    map1.addLayer({
        id: 'badswat-lake-layer',
        type: 'fill',
        source: 'badswatLake',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'fill-color': '#02decf', // Blue
            'fill-opacity': 0.8
        }
    });
    map1.addLayer({
        id: 'ishkoman-river-layer',
        type: 'line',
        source: 'ishkomanRiver',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'line-color': '#0000FF', // Blue
            'line-width': 4,
            'line-opacity': 0.8
        }
    });
    map1.addLayer({
        id: 'karambar-lake-layer',
        type: 'fill',
        source: 'karambarLake',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'fill-color': '#02decf', // Dodger blue
            'fill-opacity': 0.8
        }
    });
    //__________________________________________________________________________________________________
    //Hiranchi Layers
    map1.addLayer({
        id: 'hiranchi-glacier-layer',
        type: 'fill',
        source: 'hiranchiGlaciers',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'fill-color': '#ADD8E6', // Light blue
            'fill-opacity':0.6
        }
    });
    map1.addLayer({
        id: 'hiranchi-risk-layer',
        type: 'fill',
        source: 'hiranchiRiskZonation',
        layout: {
            'visibility': 'none'
        },
        paint: {
            'fill-color': [
                'match',
                ['get', 'ZONATION'], // Attribute to match
                'Low', '#00990f',     // Green for low risk
                'Medium', '#f0e02e',  // Yellow for medium risk
                'High', '#7d0800',    // Red for high risk
                '#000000'             // Default color (black) if no match
            ],
            'fill-opacity': 0.7
        }
    });
    map1.addLayer({
        id: 'hiranchi-glacier-line',
        type: 'line',
        source: 'hiranchiGlaciers',
        layout: {
            'visibility': 'none' // Hidden by default
        },
        paint: {
            'line-color': 'black', // Change to any color
            'line-width': 3, // Adjust thickness
        }
    });
    map1.addLayer({
        id: 'hiranchi-lake-layer',
        type: 'fill',
        source: 'hiranchiLake',
        layout: {
            'visibility': 'none' // ❌ Hidden by default
        },
        paint: {
            'fill-color': '#02decf', // Blue
            'fill-opacity': 0.8
        }
    });
});

map1.on('click', function (e) {
    console.log('Clicked coordinates:', e.lngLat);
});