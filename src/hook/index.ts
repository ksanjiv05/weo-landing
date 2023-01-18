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
  

  export function useScrollSections() {
    const [currentSection, setCurrentSection] = useState(0);
  
    useEffect(() => {
      const sections = document.querySelectorAll('section');
      let current = 0;
  
      function handleScroll() {
        const scrollTop = window.pageYOffset;
        const next = sections.length - [...sections].reverse().findIndex((section) => scrollTop < section.offsetTop) - 1;
  
        if (next !== current) {
          setCurrentSection(next);
          current = next;
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return currentSection;
  }