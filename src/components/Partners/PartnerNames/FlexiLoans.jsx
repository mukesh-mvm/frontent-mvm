import Merge from "../Merge";

function FlexiLoans() {
  const slides = [
    {
      title: "Flexiloans business loan ",
      description: "Tata Neu HDFC Bank Credit Card",
      offer: "Upto 10% Savings everytime you shop",
      logo: "/images/flexilaon.png",
      keydesc: `Flexiloans offers, no collateral loans to MSME within 48 hours. These loans offer flexible tenure of 12 to 36 months with affordable interest rates starting from only 12% per year.-
The loan application is also simple with just three simple steps, and not to mention completely digital. All these perks ensure that clients don’t run into any cash flow problems or any other financial strain. `,
      site:`https://loans.flexiloans.com/?nlp=1&campaign_code=652fa4fbfof6e`,
      pros: [
        "Business Loan Upto Rs. 50Lakhs",
        "Loan Disbursal in 48 hours",
        "No collateral required",
        "Quick Disbursal",
        "Minimal Documentation",
        "Competitive Interest Rates"
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

export default FlexiLoans;
