"use client";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Libraries,
} from "@react-google-maps/api";

const libraries = ["places"] as Libraries;
const mapContainerStyle = {
  width: "250px",
  height: "250px",
};
const center = {
  lat: 35.73851288130093, // default latitude
  lng: 51.4123503460907, // default longitude
};
const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBTZFQ0TSHmvK6roaq_2u9lDCFRHx3j2Ug",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
