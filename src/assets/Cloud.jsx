import { Box } from "@chakra-ui/react";

function Cloud({ ...props }) {
  return (
    <Box {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        preserveAspectRatio="none"
        style={{
          width: "100% !important",
          height: "100% !important",
          mixBlendMode: "multiply",
          opacity: 0.5,
        }}
      >
        <defs>
          <linearGradient
            id="ffflux-gradient"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#22574f"></stop>
            <stop offset="100%" stopColor="#223a57"></stop>
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
              baseFrequency="0.007 0.007"
              numOctaves="2"
              result="turbulence"
              seed="2"
              stitchTiles="stitch"
              type="fractalNoise"
            ></feTurbulence>
            <feGaussianBlur
              x="0%"
              y="0%"
              in="turbulence"
              result="blur"
              stdDeviation="30 8"
            ></feGaussianBlur>
            <feBlend
              x="0%"
              y="0%"
              in="SourceGraphic"
              in2="blur"
              mode="color-dodge"
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

export default Cloud;
