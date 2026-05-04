import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Screen Reader Dev Toolkit | Accessibility Setup for Blind Developers",
  description: "Automated configuration tool that sets up IDEs, terminals, and dev tools with optimal screen reader settings for blind and visually impaired developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90e82b47-cf88-41d9-bee3-48c24d81f666"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
