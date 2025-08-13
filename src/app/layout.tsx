import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christopher De Pasqual",
  description: "Portfolio de Christopher De Pasqual régroupant projets et compétences en developpement web sans oublier des veilles technologiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-primary bg-grid`}>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}