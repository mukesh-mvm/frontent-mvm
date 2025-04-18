import MainServices from './MainServices';

function SocialMediaMarketing() {
  const data = {
    title: "Social Media Marketing",
    img: "/images/brand.png",
    points: [
      {
        heading: "What is Social Media Marketing?",
        description:
          "We define your brand's unique value in the market and position it to resonate with your target audience. Our strategies ensure long-term brand loyalty and differentiation.",
      },
      {
        heading: "Tools used for Social Media Marketing",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Impact of Social Media Marketing", 
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
    ],
  };

  return <MainServices data={data} />
}

export default SocialMediaMarketing