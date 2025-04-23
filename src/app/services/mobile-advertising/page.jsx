import MobileAdvertising from '@/components/Services/MobileAdvertising'
export const metadata = {
  description:
    "MVM Business Services is a data-driven digital marketing agency helping brands grow through innovative strategies, engaging content, and performance-focused campaigns. We specialize in brand building, SEO, social media, affiliate marketing, and web development.",
  metadataBase: new URL("https://mvmbs.com"),
  alternates: {
    canonical: "./",
  },

  robots: {
    index: false, // Disables indexing
    follow: false, // Prevents following links
  },
};

function page() {
  return (
    <MobileAdvertising/>
  )
}

export default page