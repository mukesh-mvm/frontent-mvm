import React from "react";
import MainServices from "./MainServices";

function ContentWriting() {
  const data = {
    title: "Content Writing",
    img: "/images/content.webp",
    points: [
      {
        heading: "What is Content Writing?",
        description: `Content Writing refers to a long term plan for building, establishing and promoting brands. Its end goal is to establish a positive brand image and build brand equity. 
`,
      },
      {
        heading: "Tools used for Brand Marketing",
        description: `Branding tools help to establish and maintain a cohesive brand identity. They often provide useful insights that improve overall brand performance. Some examples include:
Ahrefs , search engine marketing
`,
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
      {
        heading: "Impact of Brand Marketing",
        description:
          "We develop and execute strategic campaigns to build awareness, engage customers, and grow your brand's visibility across all major platforms.",
      },
    ],
  };

  return (
    <>
      <MainServices data={data} />
    </>
  );
}

export default ContentWriting;
