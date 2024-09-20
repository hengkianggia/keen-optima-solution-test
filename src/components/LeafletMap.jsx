"use client";

import { TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";

import CircleLocation from "./CircleLocation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { data, prevData } from "@/data/geoJSONData";

const LeafletMap = () => {
  const [info, setInfo] = useState([]);
  const [previousInfo, setPreviousInfo] = useState([]);
  const [changedData, setChangedData] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://fd98b3b2e101.pilari.id/geojson");
        const data = await response.json();

        setInfo(data);
        setPreviousInfo(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocation();

    const interval = setInterval(fetchLocation, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // UNCOMMENT INI JIKA INGIN MELIHAT DATA YANG BERUBAH DENGAN DATA DUMMY
    // let arrayInfo = data?.features;
    // let arrayPrevInfo = prevData?.features;

    // INI MURUPAKAN DATA ASLI YANG DIAMBIL DARI API
    let arrayInfo = info?.features;
    let arrayPrevInfo = previousInfo?.features;

    const result = arrayInfo?.filter((item, index) => {
      return (
        item.properties.debit != arrayPrevInfo[index]?.properties.debit ||
        item.properties.water_level !=
          arrayPrevInfo[index]?.properties.water_level
      );
    });

    if (result != undefined) {
      setChangedData(result);
      result.map((item) => {
        toast("Data " + item.properties.name + " berubah", {
          cancel: {
            label: "X",
          },
        });
      });
    } else {
      setChangedData([]);
    }
    setPreviousInfo(info);
  }, [info, previousInfo]);

  return (
    <>
      <MapContainer
        center={[-6.30125981557308, 107.288129999305]}
        zoom={13}
        style={{ height: "85vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {info?.features?.map((feature) => (
          <CircleLocation
            feature={feature}
            key={feature.properties.id}
            changedData={changedData}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default LeafletMap;
