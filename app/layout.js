export const metadata = {
  title: "HYGIENE HUB SOLUTIONS",
  description: "Elevating Hygiene Standards with Confidence"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
