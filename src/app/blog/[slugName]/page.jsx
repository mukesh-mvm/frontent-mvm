import Article from "@/components/article/Article";

const page = async ({ params }) => {
  const { slugName } = await params;
  const normalText = slugName?.replace(/-/g, " ");

  console.log(slugName);
  const data = [
    {
      id: 1,
      title: "New Blog Post",
      content: `  <div class="max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h1 class="text-3xl font-bold text-gray-900 text-center mb-4 underline">
            Title is coming, wait for it
          </h1>
        </div>

        <img
          src="/images/work1.png"
          alt="Article Image"
          class="w-full h-80 object-cover"
        />

        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">
            Know how much yellow metal you can keep at home without facing tax scrutiny and how the income from gold is taxed.
          </h3>

          <p class="text-gray-700 leading-7">
            Do you know how much gold you can keep at home? The government has set a limit on this. If you're buying gold jewellery, find out how much you can keep at home without tax issues and learn about the taxation of gold income. 

            The government has set certain rules for how much gold or gold ornaments you can keep at home. It's important for everyone to follow these rules, but many people are unaware of the specified amount allowed. Let us inform you about it.
          </p>

          <p class="text-gray-700 leading-7 mt-4">
            <strong>CBDT Regulations regarding Gold:</strong> The Board of Direct Taxes (CBDT) has set rules about how much gold individuals can possess. If you purchased gold using your declared income or inherited it, you won't be taxed. However, if you sell gold, you will be subject to capital gains tax based on how long you held it.
          </p>

          <div class="p-4 mt-6 rounded-md">
            <h4 class="text-lg font-bold text-gray-900">Tax Rules on Gold</h4>
            <ul class="text-gray-800 mt-2">
              <li>Married women can hold up to 500 grams of gold.</li>
              <li>Unmarried women can hold up to 250 grams of gold.</li>
              <li>Men can hold up to 100 grams of gold.</li>
              <li>Selling gold after 3 years incurs a 20% long-term capital gains tax.</li>
              <li>Selling gold within 3 years means taxation based on your income slab.</li>
            </ul>
          </div>
        </div>
      </div>`,
    },
    {
      id: 2,
      title: "E commerce",
      content: `  <div class="max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h1 class="text-3xl font-bold text-gray-900 text-center mb-4 underline">
Credit/Debit Card Rules          </h1>
        </div>

        <img
          src="/images/work2.png"
          alt="Article Image"
          class="w-full h-80 object-cover"
        />

        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">
Change your card's network from VISA to MasterCard to RuPay or any other preferred network. Don't know How? Then check details Now.
          </h3>

          <p class="text-gray-700 leading-7">
The Reserve Bank of India (RBI) has introduced a draft rule that empowers debit, credit, and prepaid card users to select their preferred card network. This rule challenges the existing practice card network options are predetermined by agreements between issuers and networks.

The RBI proposed that from October 1, 2023, credit card issuers will have to give customers the option to choose the network of their choice. According to a draft circular by RBI, card issuers would be prohibited from entering into any agreement with card networks that limit them from availing the services of other card networks. The rules would be applicable to both banks and non-banking financial companies that issue credit cards, debit cards, or prepaid cards.

Authorised card networks currently tie up with banks/non-banks for the issuance of debit, prepaid and credit cards. However, the choice of a affiliated network for a card is decided by the card issuer. This choice is also linked to the arrangements that the card issuers have with the card network. In the circular, RBI informed that   "arrangements existing between card networks and card issuers (banks and non-banks) are not conducive to the availability of choice for customers"          </p>

          <p class="text-gray-700 leading-7 mt-4">
            <strong>In 2021, the RBI the Reserve Bank of India (RBI)</strong> mposed an indefinite prohibition on Mastercard, American Express, and Diners Club, preventing them from issuing fresh debit, credit, or prepaid cards to customers due to their failure to comply with rules regarding local data storage. However, in June 2022, the ban was lifted by the central bank after confirming that the companies had adhered to the regulations concerning the storage of payment data.      </p>

          <div class="p-4 mt-6 rounded-md">
            <h4 class="text-lg font-bold text-gray-900">HOW CAN YOU PORT YOUR CARD NETWORK?
</h4>
            <ol class="text-gray-800 mt-2">
              <li>Existing agreements at the time of amendment or renewal thereof, and
              <li>Fresh agreements executed from the date of this circular.
</li>
             
            </ol>
          </div>
        </div>
      </div>`,
    },
    {
      id: 3,
      title: "Sugar is bitter",
      content: `<div class="max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">   
          <h1 class="text-3xl font-bold text-gray-900 text-center mb-4 underline">
            Sugar is Bitter
          </h1>
        </div>
    
        <img
          src="/images/blog.jpg"
          alt="Article Image"
          class="w-full h-80 object-cover"
        />
    
        <div class="p-6">
          <h3 class="text-xl text-gray-800 mb-3">
            In India, where sweets spell celebration, the chances of being sugar
            dependent are high. What's worrying is that most of us are clueless
            about the amount of sugar we consume in a day. In the last 50 years,
            sugar consumption in India has gone up from 5% to 13% of sugar
            produced globally.
          </h3>
    
          <p class="text-gray-700 leading-7">
            So what harm can sugar do? It provides empty calories or false
            nourishments. In simple terms, it means it provides you energy but
            no nutritional sustenance. In fact, processed sugar (table sugar)
            has no minerals and often leeches minerals from the body.
          </p>
    
          <div class="p-4 mt-6 rounded-md">
            <h4 class="text-lg font-bold text-gray-900">
              Here's a closer look at how sugar can mess with your health, from
              head to toe.
            </h4>
            
            <ol class="text-gray-800 mt-2 space-y-4">
              <li class="font-bold">(1) MAY INCREASE YOUR RISK OF DEPRESSION:</li>
              <p>
                A balanced and nutritious diet can positively impact your mood, whereas consuming excessive added sugar and processed foods can potentially influence your emotional well-being.
              </p>
    
              <li class="font-bold">(2) DRAINS YOUR ENERGY:</li>
              <p>
                Foods that contain a high amount of added sugar cause a rapid
                increase in blood sugar and insulin levels, resulting in a
                temporary surge of energy. However, this energy boost is
                short-lived.
              </p>
    
              <li class="font-bold">(3) MAY SPEED UP THE SKIN AGING PROCESS:</li>
              <p>
                Wrinkles are a natural sign of skin aging. However, poor food
                choices can worsen wrinkles and speed up the aging process. A diet rich in refined carbohydrates and sugar can increase the production of AGEs.
              </p>
            </ol>
          </div>
        </div>
      </div>`
    }
    
  ];

  const filterData = data.filter((item) => {
    return item.title.toLowerCase() === normalText.toLowerCase();
  });


  return (
    <div>
      <Article data={filterData[0]} />
    </div>
  );
};

export default page;


