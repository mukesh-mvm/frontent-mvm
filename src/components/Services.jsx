function Services() {
    const servicesData = [
        {
            title: "Brand Marketing",
            description: "We run brand campaigns across all categories. Our AI enabled media buying strategy enables brands to achieve maximum reach and engagement out of their awareness marketing campaigns. "
        },
        {
            title: "Performance Marketing",
            description: "We create smart performance marketing campaigns that give maximum ROAS to you. We optimize campaign by our smart tracking and data analytics to give your best performance."
        },
        {
            title: "Affiliate Marketing",
            description: "We deliver affiliate marketing campaigns across all categories i.e. BFSI, Real Estate, Automobile, Education, E commerce, fashion & lifestyle etc. We do high performance-oriented affiliate campaigns with scale."
        },
        {
            title: "Social Media Marketing",
            description: "We build interesting social media campaigns with very high engagement and high shareability. We ensure to build that social connect with audience through our social campaigns. "
        },
        {
            title: "Mobile Advertising ",
            description: "We tap customers across all platforms, the journey from desktop to mobile & from search to social is monitored and campaigns with high performance are created for mobile performance delivery. "
        },
        {
            title: "SEO",
            description: "To tap into customers with highest intent, it’s important to tap customers doing relative searches. Our strong SEO & content team work tirelessly to ensure you get the highest share of that organic traffic."
        },
        {
            title: "Content Writing",
            description: "Content is an important pillar of digital marketing, we create highly engaging, innovative content for websites, marketing collaterals, PR activities etc"
        },
        {
            title: "Web Development",
            description: "We go beyond marketing to support our customers, our experience in building smart desktop and mobile applications ensures that high quality performance oriented & optimized products are created for our partners. "
        },
        
    ];

    return (
        <div className="cont4" id="services">
            <center>
                <h1 className="services-heading ">Our Services</h1>
            </center>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
