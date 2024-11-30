import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Sarvman - Health Care",
  description:
    "Sarvman Health Care platform : That facilitates online and offline physiotherapy appointment booking, with doctors registering and managing their services. It also offers educational blogs covering medical research, medicines, and diseases.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
