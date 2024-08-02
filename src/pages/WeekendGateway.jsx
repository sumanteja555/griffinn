import GridLayout from "../components/UI/GridLayout/GridLayout.jsx";

import weekendGateways from "../utils/weekendGateway.js";

export default function WeekendGateway() {
  return <GridLayout gridItems={weekendGateways[0]} />;
}
