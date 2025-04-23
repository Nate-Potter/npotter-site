// import React, { useEffect } from "react";

// const SlowScroll = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const backgroundPosition = `50% ${-(scrollPosition / 2)}px`;

//       const homeRow = document.querySelector(".home-row");
//       const homeRow3 = document.querySelector(".home-row3");
//       const homeRow5 = document.querySelector(".home-row5");

//       if (homeRow) {
//         homeRow.style.backgroundPosition = backgroundPosition;
//       }
//       if (homeRow3) {
//         homeRow3.style.backgroundPosition = backgroundPosition;
//       }
//       if (homeRow5) {
//         homeRow5.style.backgroundPosition = backgroundPosition;
//       }
//     };

//     const isMobile = window.innerWidth <= 600;

//     if (!isMobile) {
//       window.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (!isMobile) {
//         window.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   return null;
// };

// export default SlowScroll;

import React, { useEffect } from "react";

const SlowScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const rows = [
        { selector: ".row-a", speed: 0.5 },
        { selector: ".row-b", speed: 0.5 },
        { selector: ".row-c", speed: 0.5 },
        { selector: ".row-d", speed: 1.2 },
      ];

      rows.forEach(({ selector, speed }) => {
        const element = document.querySelector(selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + scrollTop;
          const distanceFromTop = scrollTop - offsetTop;
          const backgroundPositionY = distanceFromTop * speed;

          element.style.backgroundPosition = `50% ${backgroundPositionY}px`;
        }
      });
    };

    const isMobile = window.innerWidth <= 600;

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // run once on load in case you're already scrolled
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return null;
};

export default SlowScroll;
