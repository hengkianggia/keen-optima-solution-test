"use client";

import React, { useEffect, useState } from "react";
import { Circle, Tooltip } from "react-leaflet";
import ModalDebitAir from "./Modal";

const colors = ["blue", "red"];

const CircleLocation = ({ feature, changedData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [changedColor, setChangedColor] = useState(0);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const changedColors = () => {
      changedData.some(
        (changed) => changed.properties.id == feature.properties.id
      ) && setChangedColor(1);

      setTimeout(() => {
        setChangedColor(0);
      }, 4000);
    };
    changedColors();
  }, [changedData, feature.properties.id]);

  return (
    <>
      <Circle
        key={feature.properties.id}
        center={feature.geometry.coordinates}
        radius={100}
        pathOptions={{ color: colors[changedColor] }}
        eventHandlers={{
          click: () => {
            setModalId(feature.properties.id);
            setOpenModal(true);
          },
        }}
      >
        <Tooltip>{feature.properties.name}</Tooltip>
      </Circle>

      {openModal && (
        <ModalDebitAir
          openn={openModal}
          id={modalId}
          onclose={closeModalHandler}
        />
      )}
    </>
  );
};
export default CircleLocation;
