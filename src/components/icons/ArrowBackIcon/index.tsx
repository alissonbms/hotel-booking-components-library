import React from 'react';

type ArrowBackIconProps = {
  color?: string;
};

const ArrowBackIcon = ({ color = '#FA7436' }: ArrowBackIconProps) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8438 4.87988V6.19238H2.71875L6.4375 9.94238L5.5 10.8799L0.15625 5.53613L5.5 0.192383L6.4375 1.12988L2.71875 4.87988H10.8438Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowBackIcon;
