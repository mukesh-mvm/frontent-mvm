import React from 'react'
import MainServices from './MainServices';

function PerformanceMarketing() {
  const data = {
    title: "Performance Marketing",
    img: "/images/performance_marketing.webp",
    points: [
      {
        heading: "What is Performance Marketing?", 
        description:
          "We define your brand's unique value in the market and position it to resonate with your target audience. Our strategies ensure long-term brand loyalty and differentiation.",
      },
      {
        heading: "Tools used for Performance Marketing",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Impact of Perfomance Marketing",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
    ],
  };

  return <MainServices data={data} />
}

export default PerformanceMarketing