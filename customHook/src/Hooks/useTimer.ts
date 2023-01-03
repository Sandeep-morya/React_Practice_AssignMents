import React from "react";

type hookType = [number, () => void, () => void, () => void];

export const useTimer = (init:number): hookType => {
  const [time, setTime] = React.useState(init);
  const timeRef = React.useRef<number | null>(null);

  const start = () => {
    if (timeRef.current) return;
    if (time <= 0) return;
    timeRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          stop();
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stop = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setTime(init);
  };

  React.useEffect(() => {
    return reset; // for the sake of Component Did Unmount
  }, []);

  return [time, start, stop, reset];
};


