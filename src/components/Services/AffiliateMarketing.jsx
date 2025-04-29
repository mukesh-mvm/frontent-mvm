import MainServices from './MainServices';

function AffiliateMarketing() {
  const data = {
    title: "Affiliate Marketing",
    img: "/images/affiliate_marketing.webp",
    points: [
      {
        heading: "What is Affiliate Marketing?",
        description:
          "We define your brand's unique value in the market and position it to resonate with your target audience. Our strategies ensure long-term brand loyalty and differentiation.",
      },
      {
        heading: "Tools used for Affiliate Marketing",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Impact of Affiliate Marketing",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
    ],
  };

  return <MainServices data={data} />
}

export default AffiliateMarketing