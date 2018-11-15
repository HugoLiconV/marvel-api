import React from 'react';
import TopBarProgress from "react-topbar-progress-indicator"

TopBarProgress.config({
  barColors: {
    "0": "#0a9dff",
    "1.0": "#ff2004",
  },
  shadowBlur: 5,
  barThickness: 5
})

const LoadingSpinner = () => (
  <div>
    <TopBarProgress />
  </div>
);

export default LoadingSpinner;