import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider"; 

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "NollyPulse | Feel the heartbeat of Nigerian cinema",
  description: "Discover the latest Nigerian movies, reviews, and news on NollyPulse – your ultimate guide to Nollywood entertainment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <Provider>
          <Navbar />
        {children}
        <Footer/>
        </Provider>
        
      </body>
    </html>
  );
}