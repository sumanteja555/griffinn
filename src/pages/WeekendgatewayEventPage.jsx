import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Event from "../components/UI/EventDetails/Event.jsx";

export default function WeekendgatewayEventPage() {
  const params = useParams();
  const eventParam = params.eventId;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dynamically import the data module
        const module = await import(`../utils/weekendGateway.js`);

        // Access the specific variable from the module
        setData(module[eventParam]);
      } catch (error) {
        console.error("Error loading data:", error);
        setData(null);
      }
    };

    fetchData();
  }, [eventParam]);

  return data ? <Event event={data} /> : <h1>no data found</h1>;
}
