function Clients() {
    const clientImages = [
      "/images/client8.png",
      "/images/client2.webp",
      "/images/client6.png",
      "/images/client4.png",
      "/images/client5.jfif",
      "/images/client3.png",
      "/images/client7.png",
      "/images/client1.png",
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold underline text-center mb-8">Our Clients</h2>
  
        {/* Masonry columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {clientImages.map((image, index) => {
            const heightClass =
              index % 6 === 0 || index % 6 === 2 || index % 6 === 5 ? "h-76" : "h-84";
  
            return (
              <div
                key={index}
                className="overflow-hidden break-inside-avoid rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className={`w-full object-cover rounded-lg ${heightClass}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Clients;
  