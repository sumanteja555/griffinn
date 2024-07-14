import mountainTreks from "../utils/mountainTreks";
import GridLayout from "../components/UI/GridLayout/GridLayout.jsx";

export default function MountainTreks() {
  return <GridLayout gridItems={mountainTreks[0]} />;
}
