import { Raleway } from "next/font/google";
import "./globals.css";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Vani Ramesh",
  description:
    "Hi, I'm Vani, I'm a dedicated CS student at UIUC with a passion for leveraging technology to tackle systemic challenges and drive meaningful change!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
