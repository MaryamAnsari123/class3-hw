import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Navbar /> 
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
