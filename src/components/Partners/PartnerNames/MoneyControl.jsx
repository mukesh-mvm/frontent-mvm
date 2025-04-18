import Merge from "../Merge";

function MoneyControl() {
  const slides = [
    {
      title: "Moneycontrol personal loan ",
      description: "Tata Neu HDFC Bank Credit Card",
      offer: "Upto 10% Savings everytime you shop",
      logo: "/images/mnc.png",
      keydesc:`Moneycontrol’s personal loan offers collateral free loans with quick approval and disbursal.-

The personal loans offer flexible tenure from 3 months to 60 months. While the interest rates are low, starting from 10.5% and can vary on the basis of client’s credit profile. And the best part is option of prepayment without any additional charges, for those who are seeking financial flexibility. ​`,
      site:`https://www.moneycontrol.com/`,
      pros: [
        "Instant Loan Upto Rs. 50 Lakh",
        "100% Digital",
        "No Collateral Required",
        "Quick Approval",
        "Low Interest Rates"
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

export default MoneyControl;
