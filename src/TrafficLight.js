import { useState, useEffect } from "react";

export default function TrafficLight({ data = [] }) {
  const [currenIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const { duration } = data[currenIndex];

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [data, currenIndex]);

  return (
    <div className="parent-container">
      {data.map((light, index) => {
        return (
          <div
            key={light.color}
            className={`light-div ${
              currenIndex === index ? `${light.color}` : ""
            }`}
          ></div>
        );
      })}
    </div>
  );
}
