import { Box } from "@chakra-ui/react";
import React from "react";

function Undulated({ ...props }) {
  return (
    <Box {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1422 800"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient
            id="oooscillate-grad"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(212, 72%, 59%)"></stop>
            <stop offset="100%" stopColor="hsl(167, 52%, 78%)"></stop>
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#oooscillate-grad)" strokeLinecap="round">
          <path d="M0-3850Q355.5-100 711 400t711-4250" opacity="0.05"></path>
          <path d="M0-3800Q355.5-100 711 400t711-4200" opacity="0.06"></path>
          <path d="M0-3750Q355.5-100 711 400t711-4150" opacity="0.07"></path>
          <path d="M0-3700Q355.5-100 711 400t711-4100" opacity="0.09"></path>
          <path d="M0-3650Q355.5-100 711 400t711-4050" opacity="0.1"></path>
          <path d="M0-3600Q355.5-100 711 400t711-4000" opacity="0.11"></path>
          <path d="M0-3550Q355.5-100 711 400t711-3950" opacity="0.13"></path>
          <path d="M0-3500Q355.5-100 711 400t711-3900" opacity="0.14"></path>
          <path d="M0-3450Q355.5-100 711 400t711-3850" opacity="0.15"></path>
          <path d="M0-3400Q355.5-100 711 400t711-3800" opacity="0.16"></path>
          <path d="M0-3350Q355.5-100 711 400t711-3750" opacity="0.17"></path>
          <path d="M0-3300Q355.5-100 711 400t711-3700" opacity="0.19"></path>
          <path d="M0-3250Q355.5-100 711 400t711-3650" opacity="0.2"></path>
          <path d="M0-3200Q355.5-100 711 400t711-3600" opacity="0.21"></path>
          <path d="M0-3150Q355.5-100 711 400t711-3550" opacity="0.22"></path>
          <path d="M0-3100Q355.5-100 711 400t711-3500" opacity="0.24"></path>
          <path d="M0-3050Q355.5-100 711 400t711-3450" opacity="0.25"></path>
          <path d="M0-3000Q355.5-100 711 400t711-3400" opacity="0.26"></path>
          <path d="M0-2950Q355.5-100 711 400t711-3350" opacity="0.27"></path>
          <path d="M0-2900Q355.5-100 711 400t711-3300" opacity="0.29"></path>
          <path d="M0-2850Q355.5-100 711 400t711-3250" opacity="0.3"></path>
          <path d="M0-2800Q355.5-100 711 400t711-3200" opacity="0.31"></path>
          <path d="M0-2750Q355.5-100 711 400t711-3150" opacity="0.33"></path>
          <path d="M0-2700Q355.5-100 711 400t711-3100" opacity="0.34"></path>
          <path d="M0-2650Q355.5-100 711 400t711-3050" opacity="0.35"></path>
          <path d="M0-2600Q355.5-100 711 400t711-3000" opacity="0.36"></path>
          <path d="M0-2550Q355.5-100 711 400t711-2950" opacity="0.38"></path>
          <path d="M0-2500Q355.5-100 711 400t711-2900" opacity="0.39"></path>
          <path d="M0-2450Q355.5-100 711 400t711-2850" opacity="0.4"></path>
          <path d="M0-2400Q355.5-100 711 400t711-2800" opacity="0.41"></path>
          <path d="M0-2350Q355.5-100 711 400t711-2750" opacity="0.42"></path>
          <path d="M0-2300Q355.5-100 711 400t711-2700" opacity="0.44"></path>
          <path d="M0-2250Q355.5-100 711 400t711-2650" opacity="0.45"></path>
          <path d="M0-2200Q355.5-100 711 400t711-2600" opacity="0.46"></path>
          <path d="M0-2150Q355.5-100 711 400t711-2550" opacity="0.47"></path>
          <path d="M0-2100Q355.5-100 711 400t711-2500" opacity="0.49"></path>
          <path d="M0-2050Q355.5-100 711 400t711-2450" opacity="0.5"></path>
          <path d="M0-2000Q355.5-100 711 400t711-2400" opacity="0.51"></path>
          <path d="M0-1950Q355.5-100 711 400t711-2350" opacity="0.53"></path>
          <path d="M0-1900Q355.5-100 711 400t711-2300" opacity="0.54"></path>
          <path d="M0-1850Q355.5-100 711 400t711-2250" opacity="0.55"></path>
          <path d="M0-1800Q355.5-100 711 400t711-2200" opacity="0.56"></path>
          <path d="M0-1750Q355.5-100 711 400t711-2150" opacity="0.58"></path>
          <path d="M0-1700Q355.5-100 711 400t711-2100" opacity="0.59"></path>
          <path d="M0-1650Q355.5-100 711 400t711-2050" opacity="0.6"></path>
          <path d="M0-1600Q355.5-100 711 400t711-2000" opacity="0.61"></path>
          <path d="M0-1550Q355.5-100 711 400t711-1950" opacity="0.63"></path>
          <path d="M0-1500Q355.5-100 711 400t711-1900" opacity="0.64"></path>
          <path d="M0-1450Q355.5-100 711 400t711-1850" opacity="0.65"></path>
          <path d="M0-1400Q355.5-100 711 400t711-1800" opacity="0.66"></path>
          <path d="M0-1350Q355.5-100 711 400t711-1750" opacity="0.68"></path>
          <path d="M0-1300Q355.5-100 711 400t711-1700" opacity="0.69"></path>
          <path d="M0-1250Q355.5-100 711 400t711-1650" opacity="0.7"></path>
          <path d="M0-1200Q355.5-100 711 400t711-1600" opacity="0.71"></path>
          <path d="M0-1150Q355.5-100 711 400t711-1550" opacity="0.72"></path>
          <path d="M0-1100Q355.5-100 711 400t711-1500" opacity="0.74"></path>
          <path d="M0-1050Q355.5-100 711 400t711-1450" opacity="0.75"></path>
          <path d="M0-1000Q355.5-100 711 400t711-1400" opacity="0.76"></path>
          <path d="M0-950Q355.5-100 711 400t711-1350" opacity="0.78"></path>
          <path d="M0-900Q355.5-100 711 400t711-1300" opacity="0.79"></path>
          <path d="M0-850Q355.5-100 711 400t711-1250" opacity="0.8"></path>
          <path d="M0-800Q355.5-100 711 400t711-1200" opacity="0.81"></path>
          <path d="M0-750Q355.5-100 711 400t711-1150" opacity="0.82"></path>
          <path d="M0-700Q355.5-100 711 400t711-1100" opacity="0.84"></path>
          <path d="M0-650Q355.5-100 711 400t711-1050" opacity="0.85"></path>
          <path d="M0-600L711 400q355.5 500 711-1000" opacity="0.86"></path>
          <path d="M0-550q355.5 450 711 950t711-950" opacity="0.88"></path>
          <path d="M0-500q355.5 400 711 900t711-900" opacity="0.89"></path>
          <path d="M0-450q355.5 350 711 850t711-850" opacity="0.9"></path>
          <path d="M0-400q355.5 300 711 800t711-800" opacity="0.91"></path>
          <path d="M0-350q355.5 250 711 750t711-750" opacity="0.92"></path>
          <path d="M0-300q355.5 200 711 700t711-700" opacity="0.94"></path>
          <path d="M0-250q355.5 150 711 650t711-650" opacity="0.95"></path>
          <path d="M0-200q355.5 100 711 600t711-600" opacity="0.96"></path>
          <path d="M0-150q355.5 50 711 550t711-550" opacity="0.97"></path>
          <path d="M0-100q355.5 0 711 500t711-500" opacity="0.99"></path>
        </g>
      </svg>
    </Box>
  );
}

export default Undulated;
