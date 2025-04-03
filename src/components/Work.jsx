function Work() {
    const workData = [
        {
            image: "/images/work1.png",
            title: "AI",
            view:"Meet Our Clients",
            description: "Just starting out? No problem! Strategea has helped over 20 SMEs with their marketing plan & growth."
        },
        {
            image: "/images/work2.png",
            title: "E commerce",
            view:"See Our Work",
            description: "Our innovative solutions have boosted engagement for several brands, enhancing visibility and conversion rates."
        },
        {
            image: "/images/work3.png",
            title: "Automobile & Edtech",
            view:"View Their Feedback",
            description: "From startups to enterprises, we tailor strategies that drive success, ensuring sustainable business growth."
        }
    ];

    return (
        <div className="work-container">
            <h2 className="work-title">Our Work</h2>
            <div className="work-grid">
                {workData.map((work, index) => (
                    <div className="work-card" key={index}>
                        <img src={work.image} alt={work.title} className="work-image" />
                        <div className="work-text">
                            <h4>{work.title}</h4>
                            <p>{work.description}</p>
                            <button className="work-button">{work.view}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
