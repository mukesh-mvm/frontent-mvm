
import HomeMain from "@/components/home/HomeMain";

export const metadata = {
  title: 'MVM Business Services | Data-Driven Digital Marketing Agency',
  description: 'Grow your brand with MVM Business Services – experts in digital marketing, SEO, social media, and web development.',
  metadataBase: new URL('https://mvmbs.com'),
  alternates: {
    canonical: './',
  },

  // openGraph: {
  //   title: 'Job Kityaari',
  //   description: 'Find your dream job with Job Kityaari. Explore opportunities and grow your career!',
  //   url: 'https://jobkityaari.com',
  //   type: 'website',
  //   images: [
  //     {
  //       url: 'https://jobkityaari.com/images/logo2.png',
  //       width: 500, // Adjust the width accordingly
  //       height: 200, // Adjust the height accordingly
  //       alt: 'Job Kityaari Logo',
  //     },
  //   ],
  // },

  // other: {
  //   "language": "en",
  //   "geo.region": "IN",
  //   "geo.placename": "India",
  //   "robots": "index, follow",
  //   "application/ld+json": JSON.stringify({
  //     "@context": "https://schema.org",
  //     "@type": "Organization",
  //     "name": "JobKityaari",
  //     "url": "https://jobkityaari.com",
  //     "logo": "https://jobkityaari.com/images/logo2.png",
  //     "contactPoint": {
  //       "@type": "ContactPoint",
  //       "email": "contact@jobkityaari.com",
  //       "contactType": "customer service",
  //       "availableLanguage": ["English"]
  //     }
  //   }),
  // }

  
}


export default function Home() {
  return (
    <div >
     <HomeMain/>
    </div>
  );
}
