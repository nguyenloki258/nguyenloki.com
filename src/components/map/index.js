import "./index.scss";
import React, { useRef, useState } from "react";
import ReactMapGL, { Marker } from "@goongmaps/goong-map-react";


const GOONG_MAPTILES_KEY = "1YVQoTkZWUdNrHJOUf3jEXI1CxlWqvUfghcn6tRa";
const FIXED_POINT = [
  {
    id: 1,
    name: "Nhà trai",
    location: "Yên Tập, Nhân Hòa, Mỹ Hào, Hưng Yên",
    latitude: 20.951629,
    longitude: 106.058693,
    code: "1",
    src: "./assets/loki.jpg",
  },
  {
    id: 2,
    name: "Nhà gái",
    location: "Chi Đoan, Cộng Hòa, Nam Sách, Hải Dương",
    latitude: 21.01493,
    longitude: 106.38899,
    code: "2",
    src: "./assets/nieu.jpg",
  },
];

const Map = () => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState({
    latitude: 20.996474,
    longitude: 106.234035,
    zoom: 9,
    bearing: 0,
    pitch: 0,
  });
  const [showInfo, setShowInfo] = useState();

  const setSelectedPoint = (point) => {
    setShowInfo(point);
  };

  const settings = {
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  };

  return (
    <div>
      <div className="map-box">
        <ReactMapGL
          ref={mapRef}
          {...settings}
          {...viewport}
          width="100%"
          height="100%"
          mapStyle={"https://tiles.goong.io/assets/goong_map_web.json"}
          onViewportChange={setViewport}
          goongApiAccessToken={GOONG_MAPTILES_KEY}
          attributionControl={false}
        >
          {FIXED_POINT.map((point) => (
            <Marker
              key={`${point.latitude},${point.longitude}`}
              offsetTop={-20}
              offsetLeft={-10}
              latitude={point.latitude}
              longitude={point.longitude}
            >
              <div
                role="button"
                aria-hidden="true"
                className="point-box"
                onClick={(e) => setSelectedPoint(point, e)}
              >
                {showInfo?.id === point.id && (
                  <div className="point-popover">
                    <strong>{point.name}</strong>
                    <br />
                    <span>{point.location}</span>
                    <br />
                    <div className="box-foot">
                      <a
                        href={`http://maps.google.com/maps?daddr=${point.latitude},${point.longitude}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Đi tới
                      </a>
                    </div>
                  </div>
                )}
                <div className="marker-circle">
                  <img src={point.src} alt={point.code} />
                </div>
              </div>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </div>
  );
};
export default Map;
