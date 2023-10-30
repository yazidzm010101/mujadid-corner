import { Box } from "@chakra-ui/react";
import React from "react";

function Aurora({ ...props }) {
  return (
    <Box {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        opacity="1"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient
            id="ffflux-gradient"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            gradientTransform="rotate(208 .5 .5)"
          >
            <stop offset="0%" stopColor="hsl(164, 52%, 21%)"></stop>
            <stop offset="100%" stopColor="hsl(212, 83%, 8%)"></stop>
          </linearGradient>
          <filter
            id="ffflux-filter"
            width="140%"
            height="140%"
            x="-20%"
            y="-20%"
            colorInterpolationFilters="sRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feTurbulence
              x="0%"
              y="0%"
              baseFrequency="0.004 0.004"
              numOctaves="2"
              result="turbulence"
              seed="41"
              stitchTiles="stitch"
              type="fractalNoise"
            ></feTurbulence>
            <feGaussianBlur
              x="0%"
              y="0%"
              in="turbulence"
              result="blur"
              stdDeviation="0 57"
            ></feGaussianBlur>
            <feBlend
              x="0%"
              y="0%"
              in="SourceGraphic"
              in2="blur"
              mode="hard-light"
              result="blend"
            ></feBlend>
          </filter>
        </defs>
        <path
          fill="url(#ffflux-gradient)"
          d="M0 0H700V700H0z"
          filter="url(#ffflux-filter)"
        ></path>
      </svg>
    </Box>
  );
}

export default Aurora;
