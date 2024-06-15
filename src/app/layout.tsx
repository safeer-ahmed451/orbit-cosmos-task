import "@/styles/globals.scss";
import type { Metadata } from "next";
import { TopProgressBar } from "@/components/topProgressBar";
import { ChildNode } from "@/types";

export const metadata: Metadata = {
  title: "Orbit Cosmos Task",
  
};

export default function RootLayout({ children }: ChildNode) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <TopProgressBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
