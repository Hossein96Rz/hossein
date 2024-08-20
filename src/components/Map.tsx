"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import { useTranslations } from "next-intl";
import { useState } from "react";
import classNames from "classnames";

const armanITlocation: LatLngTuple = [35.73849657308618, 51.412376410735675];

function Map() {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("Map");

  return (
    <div
      className="h-[350px] w-full lg:basis-1/2"
      data-aos="fade-right"
      data-aos-delay={400}
    >
      <div
        className={classNames("transition-all duration-500", {
          grayscale: !isHovered,
        })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={() => setIsHovered(true)}
        onTouchEndCapture={() => setIsHovered(false)}
      >
        <MapContainer
          className="z-0 h-[350px] w-full rounded-md border-[5px] border-[#F5F8FC] dark:border-[#191C26]"
          center={armanITlocation}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            className="dark:contrast-90 dark:brightness-95 dark:hue-rotate-180 dark:invert dark:filter"
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
