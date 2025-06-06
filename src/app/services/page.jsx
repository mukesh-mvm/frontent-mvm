import ServicesHome from "@/components/Services/ServicesHome";


export const metadata = {
  title: "Digital Marketing Services That Deliver ROI",
  description: "Explore ROI-focused marketing services—SEO, branding, performance ads, and more. Scale your business with proven strategies.",
  metadataBase: new URL("https://mvmbs.com"),
  alternates: {
    canonical: "./",
  },
  robots: {
    index: false, 
    follow: false, 
  },
};


function Page() {
  
  return (
    <>
    <ServicesHome/>
    </>
  );
}

export default Page;
