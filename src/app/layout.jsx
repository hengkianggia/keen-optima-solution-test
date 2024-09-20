import localFont from "next/font/local";
import "./globals.css";
import "./leaflet.css";
import "semantic-ui-css/semantic.min.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Monitoring Air || Ken Optima Solution",
  description: "Platform Monitoring Air by Ken Optima Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors visibleToasts={99} position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
