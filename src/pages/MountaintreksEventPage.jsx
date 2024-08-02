import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Event from "../components/UI/EventDetails/Event.jsx";

export default function MountainTreksEventPage() {
  const params = useParams();
  const param = params.eventId;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dynamically import the data module
        const module = await import(`../utils/mountainTreks.js`);
        // Access the specific variable from the module
        setData(module[param]);
      } catch (error) {
        console.error("Error loading data:", error);
        setData(null);
      }
    };

    fetchData();
  }, [param]);

  return data ? <Event event={data} /> : <h1>no data found</h1>;
}
