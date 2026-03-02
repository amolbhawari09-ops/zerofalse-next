import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Zerofalse - The Intent Firewall for AI-Native Software",
  description: "AI agents write code that looks correct. 45% has dangerous vulnerabilities. Zerofalse finds the 10% that kills you in production.",
  keywords: ["AI security", "code review", "vulnerability detection", "Claude Code", "GitHub Copilot"],
  authors: [{ name: "Zerofalse" }],
  openGraph: {
    title: "Zerofalse - The Intent Firewall",
    description: "Security agent for AI-generated code",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}