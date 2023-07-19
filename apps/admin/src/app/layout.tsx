"use client";

import { GlobalStyle, theme } from "common";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Admin</title>
        <meta name="description" content="admin" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
