// import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GeolocationProvider } from "@/context/GeolocationContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "SafeZone",
//   description: "Wehave your back anytime anywhere",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GeolocationProvider>
            <SidebarProvider>
              <Header />
              <AppSidebar />
            </SidebarProvider>
            {children}
          </GeolocationProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
