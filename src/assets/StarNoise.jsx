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
            width="140%"
            height="140%"
            x="-20%"
            y="-20%"
            colorInterpolationFilters="linearRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feTurbulence
              x="0%"
              y="0%"
              baseFrequency="0.2"
              numOctaves="4"
              result="turbulence"
              seed="15"
              stitchTiles="stitch"
            ></feTurbulence>
            <feSpecularLighting
              x="0%"
              y="0%"
              in="turbulence"
              lightingColor="#fff"
              result="specularLighting"
              specularConstant="0.6"
              specularExponent="20"
              surfaceScale="23"
            >
              <feDistantLight azimuth="3" elevation="36"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <path
          fill="#fff"
          d="M0 0H700V700H0z"
          filter="url(#nnnoise-filter)"
        ></path>
      </svg>
    </Box>
  );
}

export default StarNoise;
