import React, { useEffect, useRef, useState } from "react";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  Header,
  Modal,
} from "semantic-ui-react";

function ModalDebitAir({ openn, onclose, id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchIdDetail = async () => {
      try {
        const response = await fetch(
          `https://fd98b3b2e101.pilari.id/pintu/${id}`
        );
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchIdDetail();
  }, [id]);

  return (
    <Modal onClose={onclose} open={openn && data} size="small">
      <ModalHeader>Detail Pintu Air {id}</ModalHeader>
      <ModalContent>
        <ModalDescription>
          <p
            style={{
              color: "black",
            }}
          >
            Debit : {data.debit} (m³/s)
          </p>
          <p
            style={{
              color: "black",
            }}
          >
            Water level : {data.water_level}
          </p>
          <p
            style={{
              color: "black",
            }}
          >
            Id CCTV : {data.cctv}
          </p>
          <Header>Nama Officer : {data.officer}</Header>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
}

export default ModalDebitAir;
