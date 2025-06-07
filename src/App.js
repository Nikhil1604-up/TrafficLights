import "./styles.css";

import TrafficLight from "./TrafficLight";

const lightData = [
  { color: "red", duration: 3000 },
  { color: "yellow", duration: 2000 },
  { color: "green", duration: 1000 },
];

export default function App() {
  return <TrafficLight data={lightData} />;
}
