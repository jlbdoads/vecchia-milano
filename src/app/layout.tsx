import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vecchia Milano | Moda Masculina Elegante",
  description: "Moda masculina elegante e sofisticada. A escolha natural dos verdadeiros cavalheiros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
