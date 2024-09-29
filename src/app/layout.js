import { ChakraProvider } from "@chakra-ui/react";
// import theme from "../theme";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Đây là Server Component mặc định trong thư mục "app"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Van Thuc Developer</title>
        <meta name="description" content="Van Thuc - Web Developer Portfolio" />
        <meta
          name="keywords"
          content="portfolio, web developer, Van Thuc, SEO, Chakra UI, Next.js, Dinh Van Thuc, Van Thuc Developer, Van Thuc Portfolio"
        />
        <meta name="author" content="Van Thuc" />
        <meta property="og:title" content="Van Thuc Portfolio" />
        <meta
          property="og:description"
          content="Explore projects and skills of Van Thuc, a web developer."
        />
        <meta property="og:url" content="https://vanthuc.info" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {/* Sử dụng ChakraProvider để cung cấp theme cho toàn bộ ứng dụng */}
        <ChakraProvider>
          <Header />
          {children}
        </ChakraProvider>
        <Footer />
      </body>
    </html>
  );
}
