import Merge from "../Merge";

function TataNeu() {
  const slides = [
    {
      title: "Tata Neu",
      description: "Tata Neu HDFC Bank Credit Card",
      offer: "Upto 10% Savings everytime you shop",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIhRjFwumE2XyuEhBxISWpcYE8EsE1RKGjA&s",
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

export default TataNeu;
