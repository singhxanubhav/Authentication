import { Providers } from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-950">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
