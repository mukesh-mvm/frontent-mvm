import Merge from "../Merge";

function Carstf() {
  const slides = [
    {
      title: "Cars24",
      description: "Tata Neu HDFC Bank Credit Card",
      offer: "Upto 10% Savings everytime you shop",
      logo: "/images/crs.jfif",
      keydesc: `With Cars 24, buy or sell car in only 30 minutes.- Get a free car inspection, multiple quality checks and the option of a 7 day return. Quick, simple and convenient. In addition to providing immediate payment, Cars 24 handles all paperwork to ensure a hassle-free transaction. Discover how to buy and sell cars quickly with Cars 24 today..  
`,
      site: `https://www.cars24.com/sell-marketing/`,
      pros: [
        "Doorstep test drive Facility",
        "Hassle Free experience, across the buying journey",
        "Warranty, extended warranty and easy 7-day returns",
        "Easy Loans, flexible repayment options, and upto zero down payment",
        "Complete Car Care Package",
        "Free Car Inspection Report"
      ]
      
    },
    {
      title: "Tata Neu",
      description: "Save big Move Big",
      offer: "Upto 10% Savings everytime you shop",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIhRjFwumE2XyuEhBxISWpcYE8EsE1RKGjA&s",
    },
  ];

  return (
    <div className="py-4">
      <Merge slides={slides} />
    </div>
  );
}

export default Carstf;
