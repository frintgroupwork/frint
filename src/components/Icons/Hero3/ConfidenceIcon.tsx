import React from "react";

const ConfidenceIcon = () => {
  return (
    <svg
      width="52"
      height="53"
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_250_57)">
        <rect
          x="4"
          y="0.5"
          width="44"
          height="44"
          rx="6"
          fill="white"
          shape-rendering="crispEdges"
        />
        <circle
          cx="26"
          cy="22.5"
          r="10"
          stroke="#1D4ED8"
          floodOpacity="2"
          stroke-linecap="round"
        />
        <path
          d="M23.4019 24C23.6652 24.4561 24.0439 24.8348 24.5 25.0981C24.9561 25.3614 25.4734 25.5 26 25.5C26.5266 25.5 27.0439 25.3614 27.5 25.0981C27.9561 24.8348 28.3348 24.4561 28.5981 24"
          stroke="#1D4ED8"
          floodOpacity="2"
          stroke-linecap="round"
        />
        <rect
          x="20.875"
          y="18.375"
          width="3.25"
          height="2.25"
          rx="1.125"
          fill="#1D4ED8"
          stroke="#1D4ED8"
          floodOpacity="0.25"
          stroke-linecap="round"
        />
        <rect
          x="27.875"
          y="18.375"
          width="3.25"
          height="2.25"
          rx="1.125"
          fill="#1D4ED8"
          stroke="#1D4ED8"
          floodOpacity="0.25"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_250_57"
          x="0"
          y="0.5"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_250_57"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_250_57"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ConfidenceIcon;
