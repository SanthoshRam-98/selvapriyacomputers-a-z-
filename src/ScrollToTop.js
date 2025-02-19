import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scrolling to top for:", pathname);
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // Ensures smooth scrolling
  }, [pathname]);

  return null;
};

export default ScrollToTop;
