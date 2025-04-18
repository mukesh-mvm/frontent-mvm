import Merge from "../Merge";

function BajajFinserv() {
  const slides = [
    {
      title: "Bajaj Finserv personal loan  ",
      description: "Tata Neu HDFC Bank Credit Card",
      offer: "Upto 10% Savings everytime you shop",
      logo: "/images/bajajf.png",
      keydesc: ` With Bajaj Finserv, you can get instant personal loans and also online.-

The affordable interest rates start from only 11% per annum, and allow clients to avail loans up to 50 lakh. Customers can also choose from Bajaj Markets’ vast range of lending partners as per their preferences. With this personal loan, manage all your personal finance needs without any worries.   
`,
      site: `https://www.bajajfinservmarkets.in/apply-for-personal-loan-finservmarkets/`,
      pros: [
        "Personal Loan up to Rs.55 Lakh",
        "Online Procedure and Instant Approval",
        "Money in the bank within 24 hours",
        "No Collateral Needed",
        "Flexible Repayment Tenure",
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

export default BajajFinserv;
