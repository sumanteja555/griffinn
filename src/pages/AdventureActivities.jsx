import GridLayout from "../components/UI/GridLayout/GridLayout.jsx";

import adventureActivities from "../utils/adventureActivities";

export default function AdventureActivities() {
  return <GridLayout gridItems={adventureActivities[0]} />;
}
