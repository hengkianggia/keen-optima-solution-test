"use client";

import { TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";

import CircleLocation from "./CircleLocation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.3012598155730775, 107.288129999305],
      },
      properties: {
        name: "Pintu Air 1",
        id: "1",
        debit: 29.4,
        water_level: 5.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.31151814668378, 107.27597802825609],
      },
      properties: {
        name: "Pintu Air 2",
        id: "2",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.319074053778201, 107.28552229256765],
      },
      properties: {
        name: "Pintu Air 3",
        id: "3",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.312509325841582, 107.30094251409619],
      },
      properties: {
        name: "Pintu Air 4",
        id: "4",
        debit: 23.8,
        water_level: 3.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.321876757024309, 107.29611227503557],
      },
      properties: {
        name: "Pintu Air 5",
        id: "5",
        debit: 12,
        water_level: -8.7,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.328165806587519, 107.3138778000755],
      },
      properties: {
        name: "Pintu Air 6",
        id: "6",
        debit: 38.8,
        water_level: 18.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.3285447150551635, 107.3207789524767],
      },
      properties: {
        name: "Pintu Air 7",
        id: "7",
        debit: 23.8,
        water_level: 3.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-5.335604699053812, 107.32504296596477],
      },
      properties: {
        name: "Pintu Air 8",
        id: "8",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.34930214136564, 107.3271178270743],
      },
      properties: {
        name: "Pintu Air 9",
        id: "9",
        debit: 12,
        water_level: -8.7,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.361256166815483, 107.32388984847174],
      },
      properties: {
        name: "Pintu Air 10",
        id: "10",
        debit: 23.8,
        water_level: 3.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.36218085215759, 107.3372356491283],
      },
      properties: {
        name: "Pintu Air 11",
        id: "11",
        debit: 38.8,
        water_level: 18.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.37114459948303, 107.33919846526291],
      },
      properties: {
        name: "Pintu Air 12",
        id: "12",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.386304472272729, 107.35019004067287],
      },
      properties: {
        name: "Pintu Air 13",
        id: "13",
        debit: 12.9,
        water_level: -7.8,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.401288193417343, 107.36373288762042],
      },
      properties: {
        name: "Pintu Air 14",
        id: "14",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.411823303167099, 107.36209337177493],
      },
      properties: {
        name: "Pintu Air 15",
        id: "15",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.4551322832410545, 107.37492728745238],
      },
      properties: {
        name: "Pintu Air 16",
        id: "16",
        debit: 39.7,
        water_level: 19,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.465827842476577, 107.37836891285417],
      },
      properties: {
        name: "Pintu Air 17",
        id: "17",
        debit: 10,
        water_level: -3.7,
      },
    },
  ],
};
const prevData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.3012598155730775, 107.288129999305],
      },
      properties: {
        name: "Pintu Air 1",
        id: "1",
        debit: 27.4,
        water_level: 7.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.31151814668378, 107.27597802825609],
      },
      properties: {
        name: "Pintu Air 2",
        id: "2",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.319074053778201, 107.28552229256765],
      },
      properties: {
        name: "Pintu Air 3",
        id: "3",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.312509325841582, 107.30094251409619],
      },
      properties: {
        name: "Pintu Air 4",
        id: "4",
        debit: 23.8,
        water_level: 3.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.321876757024309, 107.29611227503557],
      },
      properties: {
        name: "Pintu Air 5",
        id: "5",
        debit: 12,
        water_level: -8.7,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.328165806587519, 107.3138778000755],
      },
      properties: {
        name: "Pintu Air 6",
        id: "6",
        debit: 38.8,
        water_level: 18.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.3285447150551635, 107.3207789524767],
      },
      properties: {
        name: "Pintu Air 7",
        id: "7",
        debit: 23.8,
        water_level: 3.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-5.335604699053812, 107.32504296596477],
      },
      properties: {
        name: "Pintu Air 8",
        id: "8",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.34930214136564, 107.3271178270743],
      },
      properties: {
        name: "Pintu Air 9",
        id: "9",
        debit: 12,
        water_level: -8.7,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.361256166815483, 107.32388984847174],
      },
      properties: {
        name: "Pintu Air 10",
        id: "10",
        debit: 23.8,
        water_level: 3.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.36218085215759, 107.3372356491283],
      },
      properties: {
        name: "Pintu Air 11",
        id: "11",
        debit: 38.8,
        water_level: 18.1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.37114459948303, 107.33919846526291],
      },
      properties: {
        name: "Pintu Air 12",
        id: "12",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.386304472272729, 107.35019004067287],
      },
      properties: {
        name: "Pintu Air 13",
        id: "13",
        debit: 12.9,
        water_level: -7.8,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.401288193417343, 107.36373288762042],
      },
      properties: {
        name: "Pintu Air 14",
        id: "14",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.411823303167099, 107.36209337177493],
      },
      properties: {
        name: "Pintu Air 15",
        id: "15",
        debit: 22.9,
        water_level: 2.2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.4551322832410545, 107.37492728745238],
      },
      properties: {
        name: "Pintu Air 16",
        id: "16",
        debit: 39.7,
        water_level: 19,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.465827842476577, 107.37836891285417],
      },
      properties: {
        name: "Pintu Air 17",
        id: "17",
        debit: 12,
        water_level: -8.7,
      },
    },
  ],
};

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
