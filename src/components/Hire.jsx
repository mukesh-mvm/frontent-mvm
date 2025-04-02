import Link from "next/link";

function Hire() {
    return (
      <div className="hire-container" id="contact-us">
        <h2>
          Let’s come together and collaborate, crafting innovative marketing
          strategies that will elevate your brand and drive remarkable customer
          acquisition to help you achieve your goals.
        </h2>
        
       <Link href={"/contact"}><button className="hire-button">Contact Us</button></Link> 
      </div>
    );
  }
  
  export default Hire;
  