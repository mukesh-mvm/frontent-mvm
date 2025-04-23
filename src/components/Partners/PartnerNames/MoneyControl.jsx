import Merge from "../Merge";

function MoneyControl() {
  const slides = [
    {
      title:"Money Control",
      offer: " Flexible, collateral free loans up to 50 lakhs",     
      logo: "/images/mnc.png",
      keydesc:`Moneycontrol’s personal loan offers collateral free loans with quick approval and disbursal.-

The personal loans offer flexible tenure from 3 months to 60 months. While the interest rates are low, starting from 10.5% and can vary on the basis of client’s credit profile. And the best part is option of prepayment without any additional charges, for those who are seeking financial flexibility. ​`,
      benifirst:"/images/mny1.png",
      benisec:"/images/mny2.png",
      site:`https://www.moneycontrol.com/`,
      pros: [
        "Instant Loan Upto Rs. 50 Lakh",
        "100% Digital",
        "No Collateral Required",
        "Quick Approval",
        "Low Interest Rates"
      ]
      
    },
   
  ];

  return (
    <div >
      <Merge slides={slides} />
    </div>
  );
}

export default MoneyControl;
