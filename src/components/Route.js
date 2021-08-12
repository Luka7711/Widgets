import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
      console.log("current path changed");
    };
    /*A popstate event is dispatched to the window every 
    time the active history entry changes between two 
    history entries for the same document.*/
    console.log("after rendering router");
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  console.log("render jsx");
  return currentPath === path ? children : null;
};

export default Route;
