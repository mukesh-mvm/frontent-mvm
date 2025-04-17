import MainServices from "./MainServices";

function BrandMarketing() {
  const data = {
    title: "Brand Marketing",
    img: "/images/brand.png",
    points: [
      {
        heading: "Brand Positioning",
        description:
          "We define your brand's unique value in the market and position it to resonate with your target audience. Our strategies ensure long-term brand loyalty and differentiation.",
      },
      {
        heading: "Brand Awareness Strategy",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Brand Requirment Strategy",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
    ],
  };

  return <MainServices data={data} />;
}

export default BrandMarketing;
