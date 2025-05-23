import Merge from "../Merge";

function V3car() {
  const slides = [
    { 
      image: "/images/v3carslogo.jfif",
      offer: "V3 Cars: Sell cars quickly with instant quotes ",
      logo: "/images/CenterV33.jpeg",
      keydesc: `V3 Cars allows you to sell cars quickly and conveniently.  Sell your car with ease and get the best value for it. And their efficient three step process ensures a smooth selling experience for both parties.`,
benifirst:'/images/leftV33.jpeg',
benisec:'/images/rightV33.jpeg',
      site: `https://www.v3cars.com/sell-used-car?utm_source=_661&utm_medium=Partner&utm_campaign=used-car&transaction_id=`,
      pros: [
        "Hassle free process",
        "Free RC transfer",
        "Massive network of buyers",
        "Expert guidance",
        "Smooth selling process",
        
      ]
      
    },
   
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default V3car;
