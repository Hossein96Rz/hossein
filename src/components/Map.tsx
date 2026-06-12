"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import classNames from "classnames";

// Map coordinates
const armanITlocation: LatLngTuple = [
  35.73849657308618,
  51.412376410735675,
];

// Fix Leaflet default marker icons (IMPORTANT for Next.js)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Map() {
  const t = useTranslations("Map");
  const [isHovered, setIsHovered] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const aosAttrs = ready
    ? { "data-aos": "fade-right", "data-aos-delay": "400" }
    : {};

  return (
    <div
      className="h-[350px] w-full lg:basis-1/2"
      {...aosAttrs}
    >
      <div
        className={classNames("transition-all duration-500", {
          grayscale: !isHovered,
        })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <MapContainer
        key="map"
          className="z-0 h-[350px] w-full rounded-md border-[5px] border-[#F5F8FC] lg:h-[563px] dark:border-[#191C26]"
          center={armanITlocation}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={armanITlocation}>
            <Popup>{t("popUpMsg")}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
