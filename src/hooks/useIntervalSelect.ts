import { useState } from "react";
import { TimeInterval } from "../@types/interval";

function useIntervalSelect(initialInterval: TimeInterval) {
    const [interval, setInterval] = useState<TimeInterval>(initialInterval);
  
    const handleIntervalChange = (newInterval: TimeInterval) => {
      setInterval(newInterval);
    };
  
    return { interval, handleIntervalChange };
  }

export default useIntervalSelect