import GridLayout from "../components/UI/GridLayout/GridLayout.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function TrekPage() {
  const params = useParams();
  const trekParam = params.trekId;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dynamically import the data module
        const module = await import(`../utils/${trekParam}.js`);

        // Access the specific variable from the module
        setData(module.default[0]);
      } catch (error) {
        console.error("Error loading data:", error);
        setData(null);
      }
    };
    fetchData();
  }, [trekParam]);

  return data ? <GridLayout gridItems={data} /> : <h1>no data found</h1>;
}
