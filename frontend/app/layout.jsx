import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "A2Z Plant Nutrient | Landscaping & Plant Services in Varanasi",
  description:
    "Expert landscaping, plantation, lawn care, mural art and indoor plant services in Varanasi by A2Z Plant Nutrient Private Limited.",
  keywords: [
    "A2Z Plant Nutrient",
    "Landscaping Varanasi",
    "Plantation Varanasi",
    "Indoor Plants",
    "Lawn Care",
    "Mural Art",
    "Garden Design",
  ],
  authors: [{ name: "A2Z Plant Nutrient" }],
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "A2Z Plant Nutrient | Landscaping & Plant Services in Varanasi",
    description:
      "Expert landscaping, plantation, lawn care, mural art and indoor plant services in Varanasi.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-50 min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <Toaster />
      </body>
    </html>
  );
}
