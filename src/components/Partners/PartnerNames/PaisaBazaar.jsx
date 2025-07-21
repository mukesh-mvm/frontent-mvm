import Merge from "../Merge";

function PaisaBazaar() {
  const slides = [
    {
      image: "/images/paisabazaarlogo.webp",
      offer: "Power Your Business—Fast, Easy, Secure",
      logo: "/images/paisabanner.webp",
      keydesc: `At Paisabazaar, we recognize that funding is essential to any expanding company. Having the appropriate financial backing can be crucial, regardless of whether you're just getting started or expanding your business. We are dedicated to assisting you in locating the best and most customized business loan offers—from leading lenders—with adjustable terms and speedy approvals.`,
      benifirst: "/images/paisabenifit.webp",
      benisec: "/images/paisabenifit.webp",
      site: `http://www.intellectmedia.net/trk/click.asp?cid=3206&pid=286&did=23833&code=991`,
      pros: [
        "To save you time, the process is entirely computerized with very little paperwork.",
        "With expedited approvals and disbursements, you can receive your money more rapidly.",
        "View and select the loan offer that best suits your company's needs with ease.",
        "Loans can be offered as immediate digital loans, company loans, house loans, and personal loans.",
      ],
    },
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default PaisaBazaar;
