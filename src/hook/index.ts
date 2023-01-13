import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
};

export const useHeight = () => {
    const [height, setHeight] = useState(0);
    const handleResize = () => setHeight(window.innerHeight);
    useEffect(() => {
      window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, [height]);
    return height;
  };
  