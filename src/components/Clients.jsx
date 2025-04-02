function Clients() {
    const clientImages = [
        "/images/client1.png",
        "/images/client2.webp",
        "/images/client3.png",
        "/images/client4.png",
        "/images/client5.png",
        "/images/client6.png"
    ];

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold underline text-center mb-6">Our Clients</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {clientImages.map((image, index) => (
                    <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <img src={image} alt={`Client ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;
