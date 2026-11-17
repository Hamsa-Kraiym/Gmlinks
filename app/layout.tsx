import "./globals.css";

export const metadata = {
  title: "GMLinks | Global Media Production & Broadcast",
  description: "Camera crews, live transmission, news production, fixers and logistics worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
