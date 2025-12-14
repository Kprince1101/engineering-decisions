import type { Metadata } from "next";
import * as Tooltip from "@radix-ui/react-tooltip";
import { DevHelperInjector } from "@/components/DevHelperInjector";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineering Decisions",
  description: "Internal decision evaluation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 m-0 p-0">
        <DevHelperInjector />
        <Tooltip.Provider delayDuration={200}>
          {children}
        </Tooltip.Provider>
      </body>
    </html>
  );
}
