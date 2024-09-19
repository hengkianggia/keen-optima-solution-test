import { geoJsonData } from "@/data/geoJsonData";

export default handler = async (req, res) => {
  let data;
  try {
    const response = await fetch(
      "https://be43-2404-8000-1024-1c1a-a6ae-12ff-fe77-17f8.ngrok-free.app/geojson",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    data = await response.json();
  } catch (error) {
    console.error("Error fetching GeoJSON data:", error);
  }
  res.status(200).json(data);
};
