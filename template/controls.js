document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block"; // Show menu
    } else {
      menu.style.display = "none"; // Hide menu
    }
  });
//____________________________________________________________________________________________________________________________________________________________________________________
function setMapCenter(map, longitude, latitude, zoomLevel = null, bearing = 0, pitch = 0) {
    // Use map.flyTo() for smooth transition
    map.flyTo({
        center: [longitude, latitude],
        zoom: zoomLevel,
        pitch: 40,
        bearing: bearing,
        essential: true // Ensures the animation happens even if the user prefers reduced motion
    });
}

function accordionZoom(map, layerId, zoomLevel, lat, lng) {
    const visibility = map.getLayoutProperty(layerId, 'visibility');

    if (visibility === 'visible') {
        map.setLayoutProperty(layerId, 'visibility', 'none');
    } else {
        map.setLayoutProperty(layerId, 'visibility', 'visible');
        setMapCenter(map, Number(lng), Number(lat), Number(zoomLevel));
    }
}

//____________________________________________________________________________________________________________________________________________________________________________________
function toggleLayersVisibility(map, layerIds) {
    layerIds.forEach(layerId => {
        const visibility = map.getLayoutProperty(layerId, 'visibility');

        map.setLayoutProperty(
            layerId, 
            'visibility', 
            visibility === 'visible' ? 'none' : 'visible'
        );
    });
}//____________________________________________________________________________________________________________________________________________________________________________________
function changeBasemap(type) {
    console.log("Selected Basemap:", type);
    
    if (!map1) {
        console.error("Map instance is not available.");
        return;
    }

    let styleUrl = "";
    switch (type) {
        case "hybrid":
            styleUrl = "mapbox://styles/sarim240/clzme7200005801pb0o9tcw7r";
            break;
        case "terrain":
            styleUrl = "mapbox://styles/mapbox/outdoors-v11";
            break;
        case "light":
            styleUrl = "mapbox://styles/mapbox/light-v10";
            break;
        case "dark":
            styleUrl = "mapbox://styles/mapbox/dark-v10";
            break;
    }

    // Save only visible layers
    const visibleLayers = map1.getStyle().layers
        .filter(layer => map1.getLayoutProperty(layer.id, 'visibility') === 'visible')
        .map(layer => layer.id);

    console.log("Visible layers before basemap change:", visibleLayers);

    // Change the basemap style
    map1.setStyle(styleUrl);

    // Re-add layers once the new style has loaded
    map1.on('style.load', function () {
        visibleLayers.forEach(layerId => {
            if (map1.getLayer(layerId)) {
                map1.setLayoutProperty(layerId, 'visibility', 'visible');
            } else {
                console.warn(`Layer ${layerId} was not found in the new style.`);
            }
        });

        console.log("Restored visibility for layers:", visibleLayers);
    });
}
