import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import ScrollContext from "~/context/HtmlScroll";

export default function Document() {
  const [scroll, setScroll] = useState(true);
  return (
    <Html lang="en" style={{ overflowY: scroll ? "scroll" : "hidden" }}>
      <Head />
      <ScrollContext.Provider value={{ scroll: scroll, setScroll: setScroll }}>
        <body>
          <Main />
          <NextScript />
        </body>
      </ScrollContext.Provider>
    </Html>
  );
}
