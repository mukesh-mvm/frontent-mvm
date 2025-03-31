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
        <div className="gallery-container">
            {clientImages.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Client ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default Clients;
