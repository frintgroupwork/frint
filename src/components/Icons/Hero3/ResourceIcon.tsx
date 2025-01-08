import React from "react";

const ResourceIcon = () => {
  return (
    <svg
      width="52"
      height="53"
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_250_104)">
        <rect
          x="4"
          y="0.5"
          width="44"
          height="44"
          rx="6"
          fill="white"
          shape-rendering="crispEdges"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 31.5V17.5C16 15.6144 16 14.6716 16.5858 14.0858C17.1716 13.5 18.1144 13.5 20 13.5H30C30.8317 13.5 31.4778 13.5 32.0037 13.5271C29.7519 13.7741 28 15.6825 28 18V21.5002L27.9012 31.4671L25 30.5L22 31.5L19 30.5L16 31.5ZM35 21.5L30 21.5V18C30 16.6193 31.1193 15.5 32.5 15.5C33.8807 15.5 35 16.6193 35 18V21.5ZM18 17.5C18 16.9477 18.4477 16.5 19 16.5H25C25.5523 16.5 26 16.9477 26 17.5C26 18.0523 25.5523 18.5 25 18.5H19C18.4477 18.5 18 18.0523 18 17.5ZM18 21.5C18 20.9477 18.4477 20.5 19 20.5H21C21.5523 20.5 22 20.9477 22 21.5C22 22.0523 21.5523 22.5 21 22.5H19C18.4477 22.5 18 22.0523 18 21.5ZM18 25.5C18 24.9477 18.4477 24.5 19 24.5H23C23.5523 24.5 24 24.9477 24 25.5C24 26.0523 23.5523 26.5 23 26.5H19C18.4477 26.5 18 26.0523 18 25.5Z"
          fill="#1D4ED8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_250_104"
          x="0"
          y="0.5"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_250_104"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_250_104"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ResourceIcon;
