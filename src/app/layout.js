import "./globals.css";
import Header from "../components/Header";
import Providers from "./Providers";
import Up from '../components/Up';

export const metadata = {
  title: "Emre Kişisel Web Site",
  description: "Emre Uçar'ın kişisel web sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Up />
        </Providers>
      </body>
    </html>
  );
}
