import { Box } from "@chakra-ui/react";
import React from "react";

function StarNoise({ ...props }) {
  return (
    <Box {...props}>
      <svg
        style={{ width: "100%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.2"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="23"
              specularConstant="0.6"
              specularExponent="20"
              lighting-color="#ffffff"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="36"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect
          width="700"
          height="700"
          fill="#ffffff"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
    </Box>
  );
}

export default StarNoise;
