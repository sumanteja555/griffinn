import GridLayout from "../components/UI/GridLayout/GridLayout.jsx";

import adventurePark from "../utils/adventurePark.js";

export default function AdventurePark() {
  return <GridLayout gridItems={adventurePark[0]} />;
}
