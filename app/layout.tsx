import type { ReactNode } from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"; // Harus client component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mandaro Technologies",
  description: "Molding the Future with Code, Circuits, and Creativity",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
