import { useEffect, useState } from "react";

const useLoadingProgress = () => {
  const [count, setCount] = useState(0);
  const [thisCount, setThisCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const handlers = {
    startInitFunctionOrder(data: any) {
      setCount(data.count);
    },

    initFunctionInvoking(data: any) {
      setProgress((data.idx / count) * 100);
    },

    startDataFileEntries(data: any) {
      setCount(data.count);
    },

    performMapLoadFunction() {
      setThisCount((x) => x + 1);

      setProgress((thisCount / count) * 100);
    },
  };

  useEffect(() => {
    window.addEventListener("message", function (e: any) {
      // @ts-ignore
      (handlers[e.data.eventName] || function () {})(e.data);
    });
  });

  return progress;
};

export default useLoadingProgress;
