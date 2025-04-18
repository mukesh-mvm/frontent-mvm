import Merge from "../Merge";

function Myntra() {
  const slides = [
    {
      title: "Myntra Fashion",
      description: "Tata Neu HDFC Bank Credit Card",
      offer: "Upto 10% Savings everytime you shop",
      logo: "/images/my.webp",
      keydesc: `Myntra Fashion gives you products that are 100% original and high quality.- 

Wedding, daily wear, formals, at Myntra you can get clothes for every occasion. And the super fast delivery will be within 24 to 48 hours. Myntra also gives you features such as vernacular language search, attractive offers and free exchange. So look no further for fashion related needs.  `,
      site: `https://www.myntra.com/`,
      pros: [
        "100% Original and High Quality Products",
        "Super Fast delivery within 24 to 48 hours",
        "Attractive Offers and Free Exchange",
        "Clothes for every Occasion",
        "Multiple Payment Options"
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

export default Myntra;
